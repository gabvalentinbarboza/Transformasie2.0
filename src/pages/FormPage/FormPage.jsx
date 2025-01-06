import React from "react";
import Style from './form_page.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CriarArtigo from '../../components/CriarArtigo/CriarArtigo.jsx';

function FormPage() {
  return (
    <>
      <Header />
      <main >
        <CriarArtigo/>
      </main>
      <Footer />
    </>
  );
}

export default FormPage;
