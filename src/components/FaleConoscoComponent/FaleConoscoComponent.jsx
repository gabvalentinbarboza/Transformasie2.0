import React, { useState } from 'react';
import Styles from './faleconoscocomponent.module.css';
import emailJs from '@emailjs/browser';

function FaleConoscoComponent() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); // Novo estado para a mensagem de status

    const sendEmail = (e) => {
        e.preventDefault();

        // Verificação dos campos
        if (nome === '' || email === '' || telefone === '' || mensagem === '') {
            alert("Preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: nome,
            message: mensagem,
            phone: telefone,
            email: email,
        };

        emailJs.send("service_xox5nnp", "template_njwpqna", templateParams, "pJwA6xNb64OjIZaWO")
            .then((response) => {
                console.log("E-mail enviado!", response.status, response.text);

                // Limpar os campos após envio
                setNome('');
                setEmail('');
                setTelefone('');
                setMensagem('');

                // Definir mensagem de sucesso
                setStatusMessage("Enviado! ✓");
            })
            .catch((err) => {
                console.error("Erro no envio do e-mail:", err);
                // Definir mensagem de erro
                setStatusMessage("Erro ao enviar o email.");
            });
    };

    return (
        <section className={Styles.FaleConoscoContainer}>
            <section className={Styles.FormContainer}>
            <h1 className={Styles.FaleConoscoTitulo}>Preencha o formulário com suas informações e receba agora sua proposta!</h1>
            <form className={Styles.forms} onSubmit={sendEmail}>
                <input
                    className={Styles.input}
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className={Styles.input}
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={Styles.input}
                    type="tel"
                    placeholder="Digite seu telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <textarea
                    className={Styles.textarea}
                    placeholder="Digite sua mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                />
                <button className={Styles.buttom_solicitar} type="submit">
                    SOLICITAR
                </button>
                {/* Exibir a mensagem de status ao lado do botão */}
                {statusMessage && <span className={Styles.statusMessage}>{statusMessage}</span>}
            </form>
            </section>
        </section>
    );
}

export default FaleConoscoComponent;