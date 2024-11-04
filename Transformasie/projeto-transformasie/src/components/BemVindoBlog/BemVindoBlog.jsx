import React from "react";
import Style from "./bem_vindo_blog.module.css";
import FundoAdBlog from '../../assets/fundo_ad_blog_image.png';

function BemVindoBlog() {
    return (

        <section className={Style.BemVindoBlogContainer}>
            <h1 className={Style.Title}>
                Bem-vindo(a) ao nosso Blog
            </h1>
            <p className={Style.paragraph}>
                Seu destino para conteúdos Inspiradores. Explore nossos artigos e dicas!
            </p>
        </section>
    );
}

export default BemVindoBlog;

