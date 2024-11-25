import React from "react";
import Styles from './artigocomponent.module.css';

function ArtigoComponent({ titulo, imagemCapa, dataPostagem, ultimaAtualizacao, descricao, conteudo }) {
    return (
        <section className={Styles.ArtigoComponent}>
            <div className={Styles.TituloArtigoContainer}>
                <h1 className={Styles.TituloArtigo}>{titulo}</h1>
            </div>


            <div className={Styles.ArtigoCapa}>
                {imagemCapa && <img src={imagemCapa} alt={`Capa do artigo ${titulo}`} />}
            </div>


            <p className={Styles.detalhes}>
                Postado em {new Date(dataPostagem).toLocaleDateString('pt-BR')}
            </p>
            <p className={Styles.AtualizadoHaX}>
                - Atualizado em {new Date(ultimaAtualizacao).toLocaleDateString('pt-BR')}
            </p>

            <h3 className={Styles.DescricaoArtigo}>{descricao}</h3>
            <div className={Styles.Conteudo}>
                {conteudo}
            </div>


        </section>
    );
}

export default ArtigoComponent;
