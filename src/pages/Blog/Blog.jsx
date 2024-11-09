import React from 'react';
import Styles from './blog.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BemVindoBlog from "../../components/BemVindoBlog/BemVindoBlog";
import Footer from '../../components/Footer/Footer';
import PopUpBlog from '../../components/PopUpBlog/PopUpBlog';
import CarrosselOqueOferecemos from '../../components/CarrosselOqueOferecemos/CarrosselOqueOferecemos';
import CardArtigo from '../../components/CardArtigo/CardArtigo';

function Blog() {
    return (
        <>
            <Header />
            <main>
                <BemVindoBlog />
                <article className={Styles.LastPostsContainer}>
                    <PopUpBlog />
                    <div className={Styles.CardsContainerColumn}>
                        <CardArtigo />
                        <CardArtigo />

                    </div>
                    <h1 className={Styles.TitleVejaNossasDicas}>Veja Nossas Dicas!</h1>
                    <div className={Styles.CardsContainerRow}>
                        <CardArtigo />
                        <CardArtigo />
                        <CardArtigo />
                    </div>
                    <div className={Styles.LinkContainer}>
                        <Link to='/blog/artigos' className={Styles.LinkTodosOsArtigos}>Ver Todos</Link>
                    </div>
                </article>
                <CarrosselOqueOferecemos />
            </main>
            <Footer />
        </>
    );
}
export default Blog;