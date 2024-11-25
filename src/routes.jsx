import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ParaVoce from './pages/Para_Voce/ParaVoce.jsx';
import ParaSuaEmpresa from './pages/Para_Sua_Empresa/ParasuaEmpresa.jsx';
import Artigos from './pages/Artigos/Artigos.jsx';
import FormPage from './pages/FormPage/FormPage.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import ArtigoPage from './pages/ArtigoPage/ArtigoPage.jsx';

const RoutesConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/admintransformasie/escrever-artigo" element={<FormPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/lista-de-artigos" element={<Artigos />} />
        {/* Alterando a rota de artigo para incluir o título na URL */}
        <Route path="/blog/:id/:titulo" element={<ArtigoPage />} />
        <Route path="/para-voce" element={<ParaVoce />} />
        <Route path="/para-sua-empresa" element={<ParaSuaEmpresa />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
