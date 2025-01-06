import React, { useState } from "react";
import axios from "axios";
import Styles from "./criar_artigo.module.css";

function CriarArtigo() {
  // Estados para armazenar os valores do formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemCapa, setImagemCapa] = useState(null);
  const [imagemCard, setImagemCard] = useState(null);
  const [conteudo, setConteudo] = useState(null);
  const [mensagem, setMensagem] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configurando os dados para o envio (FormData para arquivos)
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("imagem_capa", imagemCapa);
    formData.append("imagem_card", imagemCard);
    formData.append("conteudo", conteudo);

    try {
      // Fazendo o envio com axios
      const response = await axios.post("http://localhost:8803/api/artigos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMensagem(response.data.message); // Exibe a mensagem de sucesso
    } catch (error) {
      console.error("Erro ao criar artigo:", error);
      setMensagem("Erro ao criar artigo. Tente novamente.");
    }
  };

  return (
    <section className={Styles.ContainerCriarArtigo}>
      <h1 className={Styles.formTitle}>Crie um Novo Artigo</h1>
      <form onSubmit={handleSubmit} className={Styles.form}>
        {/* Campo Título */}
        <div className={Styles.formGroup}>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        {/* Campo Descrição */}
        <div className={Styles.formGroup}>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        {/* Upload da Imagem de Capa */}
        <div className={Styles.formGroup}>
          <label htmlFor="imagem_capa">Imagem de Capa:</label>
          <input
            type="file"
            id="imagem_capa"
            onChange={(e) => setImagemCapa(e.target.files[0])}
            accept="image/*"
          />
        </div>

        {/* Upload da Imagem do Card */}
        <div className={Styles.formGroup}>
          <label htmlFor="imagem_card">Imagem do Card:</label>
          <input
            type="file"
            id="imagem_card"
            onChange={(e) => setImagemCard(e.target.files[0])}
            accept="image/*"
          />
        </div>

        {/* Upload do Conteúdo */}
        <div className={Styles.formGroup}>
          <label htmlFor="conteudo">Conteúdo (PDF ou DOCX):</label>
          <input
            type="file"
            id="conteudo"
            onChange={(e) => setConteudo(e.target.files[0])}
            accept=".pdf,.docx"
          />
        </div>

        {/* Botão de Envio */}
        <button type="submit" className={Styles.submitButton}>
          Criar Artigo
        </button>
      </form>

      {/* Mensagem de feedback */}
      {mensagem && <p className={Styles.feedback}>{mensagem}</p>}
    </section>
  );
}

export default CriarArtigo;



/*
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
            value={conteudo}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setConteudo(e.target.value)}
            required
            className={styles.formFileInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Imagem:</label>
          <input
          value={imagemCapa}
            type="file"
            accept="image/*"
            onChange={(e) => setImagem(e.target.value)}
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
*/