import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtigoComponent from "../../components/ArtigoComponent/ArtigoComponent";
import Styles from './artigopage.module.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function ArtigoPage() {
    const [artigo, setArtigo] = useState(null);  // Estado para armazenar o artigo único
    const { id } = useParams();  // Pegando o ID do artigo a partir da URL

    useEffect(() => {
        // Fazendo a requisição para buscar o artigo específico pela ID
        axios.get(`http://localhost:8803/api/artigos/${id}`)
            .then((response) => {
                setArtigo(response.data);  // Armazenando o artigo único no estado
            })
            .catch((error) => {
                console.error('Erro ao buscar artigo:', error);
            });
    }, [id]);  // O useEffect será executado toda vez que o ID mudar

    // Se o artigo não estiver carregado ainda, exibe uma mensagem de carregamento
    if (!artigo) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <main>
                {/* Exibindo o ArtigoComponent com os dados do artigo único */}
                <ArtigoComponent
                    titulo={artigo.titulo}
                    descricao={artigo.descricao}
                    imagemCapa={artigo.imagem_capa}
                    ultimaAtualizacao={artigo.ultima_atualizacao}
                    dataPostagem={artigo.data_postagem}
                    conteudo={artigo.conteudo}  // Passando o arquivo PDF como "conteudo"
                />
            </main>
            <Footer />
        </>
    );
}

export default ArtigoPage;
