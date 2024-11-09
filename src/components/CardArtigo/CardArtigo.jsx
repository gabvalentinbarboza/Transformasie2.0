import React from "react";
import Style from "./cardartigo.module.css";
import NoImage from '../../assets/icons/NoImageIcon.png';

function CardArtigo({ imageUrl, hasLink, titulo, descricao }) {
    return (
        <article className={`${Style.CardArtigo} ${hasLink ? Style.LinkClass : ''}`}>
            <div
                className={`${Style.ArtigoBackground} ${!imageUrl ? Style.NoImage : ''}`}
                style={{
                    backgroundImage: `url(${imageUrl || NoImage})`
                }}
            >
            </div>
            <div className={Style.TextContainer}>
                <h3 className={Style.ArtigoTitle}>
                    {titulo || "Título "}  {/* Se a prop 'titulo' não for passada, usa um valor default */}
                </h3>
                <p className={Style.ArtigoDescricao}>
                    <b>Descrição:</b> {descricao || "descrição"}  {/* Se a prop 'descricao' não for passada, usa um valor default */}
                </p>
            </div>
        </article>
    );
}

export default CardArtigo;
