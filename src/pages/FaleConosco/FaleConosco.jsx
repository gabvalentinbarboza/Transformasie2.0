import React from "react";
import Styles from "./fale_conosco.module.css";
import FaleConoscoComponent from '../../components/FaleConoscoComponent/FaleConoscoComponent.jsx';
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function FaleConosco () {

    return (
        <>
        <Header />
        <main>
        <FaleConoscoComponent />
        </main>
        <Footer />
        </>
    );
}

export default FaleConosco;
