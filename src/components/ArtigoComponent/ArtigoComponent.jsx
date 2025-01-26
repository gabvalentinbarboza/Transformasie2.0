import React from 'react';
import { Document, Page } from 'react-pdf';
import Styles from './artigocomponent.module.css';
import NoImage from '../../assets/icons/NoImageIcon.png';

function ArtigoComponent({ titulo, imagemCapa, dataPostagem, ultimaAtualizacao, descricao, conteudo }) {
    const validTitulo = titulo || "Título não disponível";
    const validImage = imagemCapa
        ? `http://localhost:8803/uploads/imagens_capa/${imagemCapa}`
        : NoImage;
    const validConteudo = conteudo ? `http://localhost:8803/uploads/artigos/${conteudo}` : null;

    return (
        <section className={Styles.ArtigoComponent}>
            <div className={Styles.TituloArtigoContainer}>
                <h1 className={Styles.TituloArtigo}>{validTitulo}</h1>
            </div>

            <div className={Styles.ArtigoCapa}>
                <img
                    className={`${Styles.ImageClass} ${!imagemCapa ? Styles.NoImage : ''}`}
                    src={validImage}
                    alt={validTitulo}
                />
            </div>

            <div className={Styles.DatasContainer}>
                <p className={Styles.detalhes}>
                    Postado em {new Date(dataPostagem).toLocaleDateString('pt-BR')}
                </p>
                <p className={Styles.AtualizadoHaX}>
                    - Atualizado pela última vez em {new Date(ultimaAtualizacao).toLocaleDateString('pt-BR')}
                </p>
            </div>

            <h3 className={Styles.DescricaoArtigo}>{descricao}</h3>

            <div className={Styles.ConteudoContainer}>
                {validConteudo ? (
                    <div className={Styles.PDFContainer}>
                        <Document file={validConteudo} className={Styles.PDFDocument}>
                            <Page pageNumber={1} className={Styles.PDFPage} />
                        </Document>
                    </div>
                ) : (
                    <p className={Styles.conteudo}>Erro ao carregar o conteúdo do artigo.</p>
                )}
            </div>
        </section>
    );
}

export default ArtigoComponent;
