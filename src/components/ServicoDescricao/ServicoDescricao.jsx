import React from 'react';
import Styles from './servico_descricao.module.css';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
// Importe das imagens conforme os caminhos fornecidos


function ServicoDescricao({ titulo, imagem, subtitulo, texto }) {
    return (
        <section className={Styles.Container}>

            <div className={Styles.TituloContainer}>
                <h1 className={Styles.Titulo}>{titulo}</h1>
            </div>

            <div className={Styles.ImagemContainer}>
                <img src={imagem} alt="Imagem Descrição Serviço" className={Styles.Imagem} />
            </div>

            <div className={Styles.SubtituloContainer}>
                <h2 className={Styles.Subtitulo}>{subtitulo}</h2>
            </div>

            <div className={Styles.TextoContainer}>
                <p className={Styles.Texto}>{texto}</p>
            </div>

            <div className={Styles.FicouInteressadoContainer}>
                <h2 className={Styles.FicouInteressado}>Ficou interessado? Receba agora uma proposta deste serviço!</h2>
            </div>

            <div className={Styles.BotaoContainer}>
                <Link to="/fale-conosco" className={Styles.BotaoReceberProposta}>Receber proposta</Link>
            </div>

        </section>
    );
}

export default ServicoDescricao;
