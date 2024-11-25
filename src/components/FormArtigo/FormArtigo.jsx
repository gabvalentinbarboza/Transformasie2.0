import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './form_artigo.module.css';

function FormArtigo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [conteudo, setConteudo] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Validações no frontend
  const isFormValid = () => {
    if (!titulo || !descricao || !conteudo || !imagem) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  };

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('conteudo', conteudo);
    formData.append('imagem', imagem);

    try {
      const response = await axios.post('http://localhost:8803/api/artigos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccessMessage('Artigo salvo com sucesso!');
      console.log('Resposta do servidor:', response.data);
      navigate('/blog'); // Redireciona para o blog
    } catch (error) {
      console.error('Erro ao salvar artigo:', error);
      if (error.response && error.response.data) {
        setErrorMessage(`Erro do servidor: ${error.response.data.message}`);
      } else {
        setErrorMessage('Erro ao salvar artigo. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Alterar imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validTypes.includes(file.type)) {
        setImagem(file);
        setErrorMessage(''); // Limpa mensagem de erro, se houver
      } else {
        setErrorMessage('Apenas arquivos JPEG, PNG ou GIF são permitidos.');
        setImagem(null);
      }
    }
  };

  // Alterar conteúdo
  const handleContentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (validTypes.includes(file.type)) {
        setConteudo(file);
        setErrorMessage(''); // Limpa mensagem de erro, se houver
      } else {
        setErrorMessage('Apenas arquivos PDF, DOC ou DOCX são permitidos.');
        setConteudo(null);
      }
    }
  };

  return (
    <section className={styles.FormContainer}>
      <h1 className={styles.formTitle}>Crie um Novo Artigo</h1>

      <p className={styles.formDescription}>
        Preencha os campos abaixo para criar um novo artigo para o blog.
      </p>

      <form onSubmit={handleSubmit} className={styles.formArtigo}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className={styles.formTextarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Conteúdo (arquivo PDF ou Word):</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleContentChange}
            required
            className={styles.formFileInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Imagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className={styles.formFileInput}
          />
        </div>

        <button type="submit" disabled={loading} className={styles.formButton}>
          {loading ? 'Salvando...' : 'Salvar Artigo'}
        </button>

        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </section>
  );
}

export default FormArtigo;


/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './form_artigo.module.css';

function FormArtigo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Validações no frontend
  const isFormValid = () => {
    if (!titulo || !descricao || !texto || !imagem) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  };

  // Enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('texto', texto);
    formData.append('imagem', imagem);

    try {
      const response = await axios.post('http://localhost:8803/api/artigos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccessMessage('Artigo salvo com sucesso!');
      console.log('Resposta do servidor:', response.data);
      navigate('/blog'); // Redireciona para o blog
    } catch (error) {
      console.error('Erro ao salvar artigo:', error);
      if (error.response && error.response.data) {
        setErrorMessage(`Erro do servidor: ${error.response.data.message}`);
      } else {
        setErrorMessage('Erro ao salvar artigo. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Alterar imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validTypes.includes(file.type)) {
        setImagem(file);
        setErrorMessage(''); // Limpa mensagem de erro, se houver
      } else {
        setErrorMessage('Apenas arquivos JPEG, PNG ou GIF são permitidos.');
        setImagem(null);
      }
    }
  };



  return (
    <section className={styles.FormContainer}>
      <h1 className={styles.formTitle}>Crie um Novo Artigo</h1>

      <p className={styles.formDescription}>
        Preencha os campos abaixo para criar um novo artigo para o blog.
      </p>

      <form onSubmit={handleSubmit} className={styles.formArtigo}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className={styles.formInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className={styles.formTextarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Texto do Artigo e demais imagens:</label>
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
            className={styles.formTextarea}
            style={{ fontSize: fontSize }}
          />
        </div>


        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Imagem:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className={styles.formFileInput}
          />
        </div>

        <button type="submit" disabled={loading} className={styles.formButton}>
          {loading ? 'Salvando...' : 'Salvar Artigo'}
        </button>

        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </section>
  );
}

export default FormArtigo;

*/