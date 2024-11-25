import express from 'express';
import mysql from 'mysql2';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8803;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Verificar e criar o diretório de uploads
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use('/uploads', express.static(uploadDir));

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Somente imagens são permitidas.'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 12 }
});

// Rota para criar artigo (POST)
app.post('/api/artigos', upload.single('imagem'), (req, res) => {
  const { titulo, descricao, conteudo } = req.body;
  const imagemCapa = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    INSERT INTO artigos (titulo, descricao, imagem_capa, conteudo, data_postagem) 
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [titulo, descricao, imagemCapa, conteudo], (err, result) => {
    if (err) {
      console.error('Erro ao inserir artigo:', err);
      return res.status(500).json({ message: 'Erro ao salvar artigo' });
    }
    res.status(201).json({ message: 'Artigo salvo com sucesso', artigoId: result.insertId });
  });
});

// Rota para buscar todos os artigos (GET)
app.get('/api/artigos', (req, res) => {
  db.query(`
    SELECT id, titulo, descricao, imagem_capa, data_postagem, ultima_atualizacao 
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
