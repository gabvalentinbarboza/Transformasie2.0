import React from "react";
import Style from './form_page.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FormArtigo from '../../components/FormArtigo/FormArtigo';

function FormPage() {
  return (
    <>
      <Header />
      <main >
        <FormArtigo />
      </main>
      <Footer />
    </>
  );
}

export default FormPage;
