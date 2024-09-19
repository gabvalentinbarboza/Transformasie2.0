import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import QuemSomos from '../../components/QuemSomos/QuemSomos';
import NossosServicos from '../../components/NossosServicos/NossosServicos';

function Home() {
  return (
    <div>
      <Header />
      <QuemSomos />
      <NossosServicos />
      <Footer />
    </div>
  );
}

export default Home;
