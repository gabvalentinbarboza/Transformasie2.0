import React from "react";
import Styles from './artigocomponent.module.css';

function ArtigoComponent() {
    return (
        <section className={Styles.ArtigoComponent}>

            <div className={TituloArtigoContainer}>
                <h1 className={TituloArtigo}>

                </h1>
            </div>

            <div className={Styles.ArtigoCapa}>
            </div>

            <div className={Styles.detalhesContainer}>
                <p className={Styles.detalhes}>
                </p>
                <p className={Styles.AtualizadoHaX}>
                </p>
            </div>

            <h3 className={Styles.DescricaoArtigo}>

            </h3>

<p className={Styles.Subtitulo}>

</p>
<p className={Styles.Paragrafo}>
    
</p>
        </section>
    );

}

export default ArtigoComponent;