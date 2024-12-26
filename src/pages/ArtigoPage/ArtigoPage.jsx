import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArtigoComponent from "../../components/ArtigoComponent/ArtigoComponent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function ArtigoPage() {
    const [artigo, setArtigo] = useState(null); // Estado para armazenar o artigo único
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado para erros
    const { id } = useParams(); // Pegando o ID do artigo a partir da URL

    useEffect(() => {
        setLoading(true); // Inicia o carregamento
        setError(null); // Limpa qualquer erro anterior

        // Fazendo a requisição para buscar o artigo específico pela ID
        axios.get(`http://localhost:8803/api/artigos/${id}`)
            .then((response) => {
                setArtigo(response.data); // Armazenando o artigo único no estado
                setLoading(false); // Finaliza o carregamento
            })
            .catch((error) => {
                console.error("Erro ao buscar artigo:", error);
                setError("Erro ao carregar o artigo. Tente novamente mais tarde."); // Mensagem de erro
                setLoading(false); // Finaliza o carregamento
            });
    }, [id]); // O useEffect será executado toda vez que o ID mudar

    // Exibe a mensagem de erro, se houver
    if (error) {
        return <div>{error}</div>;
    }

    // Se o artigo não estiver carregado ainda, exibe uma mensagem de carregamento
    if (loading) {
        return <div>Carregando...</div>; // Pode trocar por um spinner ou outro componente visual
    }

    return (
        <>
            <Header />
            <main>
                {/* Renderizando o ArtigoComponent com os dados do artigo único */}
                {artigo && (
                    <ArtigoComponent
                        artigoId={artigo.id}
                        titulo={artigo.titulo}
                        descricao={artigo.descricao}
                        imagemCapa={artigo.imagem_capa}
                        ultimaAtualizacao={artigo.ultima_atualizacao}
                        dataPostagem={artigo.data_postagem}
                        conteudo={artigo.conteudo} // Passando o conteúdo como PDF ou texto
                    />
                )}
            </main>
            <Footer />
        </>
    );
}

export default ArtigoPage;
