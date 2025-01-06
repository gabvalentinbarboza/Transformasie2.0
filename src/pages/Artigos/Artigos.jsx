import React, { useEffect, useState } from "react";
import Style from "./artigos.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardArtigo from "../../components/CardArtigo/CardArtigo";
import axios from "axios";

function Artigos() {
    const [artigos, setArtigos] = useState([]); // Estado para armazenar os artigos

    useEffect(() => {
        // Requisição à API para buscar todos os artigos
        axios.get("http://localhost:8803/api/artigos")
            .then((response) => {
                setArtigos(response.data); // Atualiza o estado com os artigos retornados
            })
            .catch((error) => {
                console.error("Erro ao buscar artigos:", error);
            });
    }, []); // O useEffect será chamado apenas uma vez ao carregar o componente

    return (
        <>
            <Header />
            <main className={Style.ArtigosMain}>
                <h1 className={Style.Title}>Todos os Artigos</h1>
                <div className={Style.CardsContainer}>
                    {/* Renderiza todos os artigos */}
                    {artigos.map((artigo) => (
                        <CardArtigo
                            key={artigo.id}
                            imagem={artigo.imagem_card}
                            hasLink={true}
                            linkTo={`/blog/${artigo.id}`}
                            artigoId={artigo.id}
                            titulo={artigo.titulo}
                            descricao={artigo.descricao}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Artigos;


