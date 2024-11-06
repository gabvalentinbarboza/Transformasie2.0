import React from 'react';
import Styles from './blog.module.css';
import Header from '../../components/Header/Header';
import BemVindoBlog from "../../components/BemVindoBlog/BemVindoBlog";
import Footer from '../../components/Footer/Footer';
import PopUp from '../../components/PopUp_Formulario/PopUp_Formulario'
import CarrosselOqueOferecemos from '../../components/CarrosselOqueOferecemos/CarrosselOqueOferecemos'

function Blog() {
    return (
        <>
            <Header />
            <main>
                <BemVindoBlog />
                <PopUp />
                <CarrosselOqueOferecemos />
                
            </main>

            <Footer />
        </>
    );
}
export default Blog;