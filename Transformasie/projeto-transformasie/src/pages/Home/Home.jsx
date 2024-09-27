import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuemSomos from '../../components/QuemSomos/QuemSomos';
import NossosServicos from '../../components/NossosServicos/NossosServicos';
import PopUp from '../../components/PopUp_Formulario/PopUp_Formulario';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <QuemSomos />
        <NossosServicos />
        <PopUp title="Começe a sua jornada!"/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
