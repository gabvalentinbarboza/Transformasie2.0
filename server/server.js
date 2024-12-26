import express from 'express';
import mysql from 'mysql2';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Define __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 8803;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    process.exit(1);
  } else {
    console.log('Conexão com o banco de dados bem-sucedida');
  }
});


// Definindo o diretório principal para os uploads
const uploadDir = path.join(__dirname, 'uploads');

// Criando o Storage Engine para várias subpastas dentro de 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = '';

    // Definindo a subpasta com base no campo do arquivo
    if (file.fieldname === 'imagem_capa') {
      dir = path.join(uploadDir, 'imagens_capa');
    } else if (file.fieldname === 'imagem_card') {
      dir = path.join(uploadDir, 'imagens_card');
    } else if (file.fieldname === 'conteudo') {
      dir = path.join(uploadDir, 'artigos'); // Alterado para 'artigos'
    }

    // Certificando-se de que o diretório existe
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // Gerando o nome do arquivo com a data atual para garantir unicidade
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Tipo de arquivo não permitido'), false);
  }
};

// Limite de tamanho de arquivo: 2MB
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1920 * 1024 } // Limite de 10MB por arquivo
});


// Rota para criar artigo (POST)
app.post('/api/artigos', upload.fields([
  { name: 'imagem_capa', maxCount: 1 },
  { name: 'imagem_card', maxCount: 1 },
  { name: 'conteudo', maxCount: 1 }
]), (req, res) => {
  const { titulo, descricao, conteudo } = req.body;
  const imagemCapa = req.files['imagem_capa'] ? req.files['imagem_capa'][0].filename : null;
  const imagemCard = req.files['imagem_card'] ? req.files['imagem_card'][0].filename : null;
  const conteudoDocumento = req.files['conteudo'] ? req.files['conteudo'][0].filename : null;

  // Inserção no banco de dados usando a conexão existente
  const query = `INSERT INTO artigos (titulo, descricao, conteudo, imagem_capa, imagem_card) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [titulo, descricao, conteudoDocumento, imagemCapa, imagemCard], (err, result) => {
    if (err) {
      console.error('Erro ao criar o artigo:', err);
      return res.status(500).json({ message: 'Erro ao criar o artigo', error: err });
    }
    res.status(200).json({ message: 'Artigo criado com sucesso!' });
  });
});



// Rota para buscar todos os artigos (GET)
app.get('/api/artigos', (req, res) => {
  db.query(`
    SELECT id, titulo, descricao, imagem_card, imagem_capa, data_postagem, ultima_atualizacao 
    FROM artigos ORDER BY data_postagem DESC
  `, (err, results) => {
    if (err) {
      console.error('Erro ao buscar artigos:', err);
      return res.status(500).json({ message: 'Erro ao buscar artigos' });
    }
    res.json(results);
  });
});


// Rota para buscar artigo por ID (GET)
app.get('/api/artigos/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM artigos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar artigo:', err);
      return res.status(500).json({ message: 'Erro ao buscar artigo' });
    }
    if (!results.length) {
      return res.status(404).json({ message: 'Artigo não encontrado' });
    }
    res.json(results[0]);
  });
});



// Rota para atualizar artigo (PUT)
app.put('/api/artigos/:id', upload.single('imagem'), (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, conteudo } = req.body;
  const imagemCapa = req.file ? `/uploads/${req.file.filename}` : null;

  const updateQuery = `
    UPDATE artigos 
    SET titulo = ?, descricao = ?, conteudo = ?, 
        imagem_capa = IFNULL(?, imagem_capa), ultima_atualizacao = NOW()
    WHERE id = ?
  `;

  db.query(updateQuery, [titulo, descricao, conteudo, imagemCapa, id], (err) => {
    if (err) {
      console.error('Erro ao atualizar artigo:', err);
      return res.status(500).json({ message: 'Erro ao atualizar artigo' });
    }
    res.json({ message: 'Artigo atualizado com sucesso' });
  });
});

// Rota para deletar artigo (DELETE)
app.delete('/api/artigos/:id', (req, res) => {
  const { id } = req.params;

  db.query('SELECT imagem_capa FROM artigos WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar artigo para deletar:', err);
      return res.status(500).json({ message: 'Erro ao buscar artigo' });
    }

    if (results.length && results[0].imagem_capa) {
      const imagePath = `.${results[0].imagem_capa}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    db.query('DELETE FROM artigos WHERE id = ?', [id], (err) => {
      if (err) {
        console.error('Erro ao deletar artigo:', err);
        return res.status(500).json({ message: 'Erro ao deletar artigo' });
      }
      res.json({ message: 'Artigo deletado com sucesso' });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
