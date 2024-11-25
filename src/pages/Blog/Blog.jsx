import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from './blog.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BemVindoBlog from "../../components/BemVindoBlog/BemVindoBlog";
import Footer from '../../components/Footer/Footer';
import PopUpBlog from '../../components/PopUpBlog/PopUpBlog';
import CarrosselOqueOferecemos from '../../components/CarrosselOqueOferecemos/CarrosselOqueOferecemos';
import CardArtigo from '../../components/CardArtigo/CardArtigo';

function Blog() {
    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para buscar os artigos da API
        axios.get('http://localhost:8803/api/artigos')
            .then((response) => {
                setArtigos(response.data);  // Armazenando os artigos no estado
            })
            .catch((error) => {
                console.error('Erro ao buscar artigos:', error);
            });
    }, []);  // Esse useEffect será chamado apenas uma vez quando o componente for montado

    return (
        <>
            <Header />
            <main>
                <BemVindoBlog />
                <article className={Styles.LastPostsContainer}>
                    <PopUpBlog />
                    <div className={Styles.CardsContainerColumn}>
                        {/* Renderizando os 2 primeiros artigos */}
                        {artigos.slice(0, 2).map((artigo) => (
                            <CardArtigo
                                key={artigo.id}
                                imagem={artigo.imagem_capa}
                                hasLink={true}
                                linkTo={`/blog/${artigo.id}`}
                                artigoId={artigo.id}
                                titulo={artigo.titulo}
                                descricao={artigo.descricao}
                            />
                        ))}
                    </div>
                    <h1 className={Styles.TitleVejaNossasDicas}>Veja Nossas Dicas!</h1>
                    <div className={Styles.CardsContainerRow}>
                        {/* Renderizando os próximos 3 artigos */}
                        {artigos.slice(2, 5).map((artigo) => (
                            <CardArtigo
                                key={artigo.id}
                                imagem={artigo.imagem_capa}
                                hasLink={true}
                                linkTo={`/blog/${artigo.id}`}
                                artigoId={artigo.id}
                                titulo={artigo.titulo}
                                descricao={artigo.descricao}
                            />
                        ))}
                    </div>
                    <div className={Styles.LinkContainer}>
                        <Link to='/blog/lista-de-artigos' className={Styles.LinkTodosOsArtigos}>Ver Todos</Link>
                    </div>
                </article>
                <CarrosselOqueOferecemos />
            </main>
            <Footer />
        </>
    );
}

export default Blog;
