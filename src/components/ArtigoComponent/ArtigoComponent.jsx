import React, { useEffect, useRef, useState } from 'react';
import Styles from './artigocomponent.module.css';
import NoImage from '../../assets/icons/NoImageIcon.png';
import * as pdfjs from 'pdfjs-dist';

// Configurar o caminho do Worker para o PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ArtigoComponent({ artigoId, titulo, imagemCapa, dataPostagem, ultimaAtualizacao, descricao, conteudo }) {
    const validTitulo = titulo ? titulo : "Título não disponível";
    const validImage = imagemCapa
        ? `http://localhost:8803/uploads/imagens_capa/${imagemCapa}`
        : NoImage;

    const isPdf = conteudo && conteudo.endsWith('.pdf');
    const conteudoUrl = isPdf ? `http://localhost:8803/uploads/artigos/${conteudo}` : conteudo;

    const pdfContainerRef = useRef(null);  // Para armazenar a referência do container de PDF
    const [pdfLoaded, setPdfLoaded] = useState(false);  // Para controlar o estado de carregamento do PDF
    const [error, setError] = useState(false); // Para controlar erro no carregamento do PDF

    // Função para tentar recarregar o PDF
    const reloadPdf = () => {
        setPdfLoaded(false);
        setError(false);
    };

    // UseEffect para carregar o PDF
    useEffect(() => {
        if (isPdf && pdfContainerRef.current) {
            const loadingTask = pdfjs.getDocument(conteudoUrl);
    
            loadingTask.promise
                .then(pdf => {
                    pdf.getPage(1).then(page => {
                        const scale = window.innerWidth / 1000; // Ajusta a escala com base na largura da tela
                        const viewport = page.getViewport({ scale });
    
                        const canvas = document.createElement('canvas');
                        canvas.className = Styles.CustomCanvas; // Adiciona a classe ao canvas
                        const context = canvas.getContext('2d');
    
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;
    
                        page.render({
                            canvasContext: context,
                            viewport: viewport
                        }).promise.then(() => {
                            const pdfContainer = pdfContainerRef.current;
                            pdfContainer.appendChild(canvas);
                            setPdfLoaded(true); // Marca o PDF como carregado
                            setError(false);  // Caso o carregamento seja bem-sucedido, reseta o erro
                        });
                    });
                })
                .catch(error => {
                    console.error('Erro ao carregar o PDF:', error);
                    setPdfLoaded(false); // Caso ocorra um erro no carregamento
                    setError(true); // Marca como erro para tentar novamente
                });
        }
    }, [isPdf, conteudoUrl]);

    // Tenta recarregar o PDF caso tenha ocorrido um erro
    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                reloadPdf();
            }, 5000); // Tenta recarregar após 5 segundos

            return () => clearTimeout(timeout);
        }
    }, [error]);

    return (
        <section className={Styles.ArtigoComponent}>
            {/* Renderiza o título */}
            <div className={Styles.TituloArtigoContainer}>
                <h1 className={Styles.TituloArtigo}>{validTitulo}</h1>
            </div>

            {/* Renderiza a imagem de capa ou a imagem padrão */}
            <div className={Styles.ArtigoCapa}>
                <img
                    className={`${Styles.ImageClass} ${!imagemCapa ? Styles.NoImage : ''}`} 
                    src={validImage}
                    alt={validTitulo}
                />
            </div>

            {/* Renderiza as datas de postagem e atualização */}
            <div className={Styles.DatasContainer}>
                <p className={Styles.detalhes}>
                    Postado em {new Date(dataPostagem).toLocaleDateString('pt-BR')}
                </p>
                <p className={Styles.AtualizadoHaX}>
                    - Atualizado pela última vez em {new Date(ultimaAtualizacao).toLocaleDateString('pt-BR')}
                </p>
            </div>

            {/* Descrição do artigo */}
            <h3 className={Styles.DescricaoArtigo}>{descricao}</h3>

            {/* Renderiza o conteúdo do artigo */}
            <div className={Styles.Conteudo}>
                {isPdf ? (
                    // Exibe o PDF se for um PDF
                    <div ref={pdfContainerRef} className={Styles.PdfContainer}>
                        {!pdfLoaded && !error && <p>Carregando PDF...</p>}
                        {error && (
                            <div>
                                <p>Erro ao carregar o PDF. Tentando novamente...</p>
                                <button onClick={reloadPdf}>Tentar novamente</button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Exibe o conteúdo HTML se não for um PDF
                    <div
                        dangerouslySetInnerHTML={{ __html: conteudo }}
                        className={Styles.HtmlContent} // Estilo para conteúdo HTML
                    />
                )}
            </div>
        </section>
    );
}

export default ArtigoComponent;
