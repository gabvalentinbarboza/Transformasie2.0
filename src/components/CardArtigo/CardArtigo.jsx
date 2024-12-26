import React from "react";
import { Link } from "react-router-dom";
import Style from "./cardartigo.module.css";
import NoImage from '../../assets/icons/NoImageIcon.png';

function CardArtigo({ imagem, hasLink, linkTo, artigoId, titulo, descricao }) {
    // Verificação para garantir que o título, a descrição e a imagem existam
    const validTitulo = titulo ? titulo : "Título não disponível";
    const validDescricao = descricao ? descricao : "Descrição não disponível";
    const validImage = imagem
        ? `http://localhost:8803/uploads/imagens_card/${imagem}`
        : NoImage;


    // Formatação do título para a URL
    const formattedTitle = encodeURIComponent(validTitulo.toLowerCase().replace(/\s+/g, '-'));

    const cardContent = (
        <article className={`${Style.CardArtigo} ${hasLink ? Style.LinkClass : ''}`}>
            <div className={Style.ArtigoBackground}>
                <img
                    className={`${Style.ImageClass} ${!imagem ? Style.NoImage : ''}`} // Adiciona uma classe se não houver imagem
                    src={validImage}
                    alt={validTitulo}
                />
            </div>
            <div className={Style.TextContainer}>
                <h3 className={Style.ArtigoTitle}>
                    {validTitulo}
                </h3>
                <p className={Style.ArtigoDescricao}>
                    <b>Descrição:</b> {validDescricao}
                </p>
            </div>
        </article>
    );

    return hasLink ? (
        <Link to={`/blog/${artigoId}/${formattedTitle}`} style={{ textDecoration: 'none' }}>
            {cardContent}
        </Link>
    ) : (
        cardContent
    );
}

export default CardArtigo;
