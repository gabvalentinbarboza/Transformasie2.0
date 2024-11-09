import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Sobre from './pages/Sobre/Sobre.jsx';
import Blog from './pages/Blog/Blog.jsx';
import ParaVoce from './pages/Para_Voce/ParaVoce.jsx';  // Caminho correto
import ParaSuaEmpresa from './pages/Para_Sua_Empresa/ParasuaEmpresa.jsx';
import Artigos from './pages/Artigos/Artigos.jsx';
import ArtigoComponent from './components/ArtigoComponent/ArtigoComponent.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const RoutesConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/artigos" element={<Artigos />} />
        <Route path="/blog/artigos/artigo_name" element={<ArtigoComponent />} />
        <Route path="/para-voce" element={<ParaVoce />} />  {/* Certifique-se que essa rota está correta */}
        <Route path="/para-sua-empresa" element={<ParaSuaEmpresa />} />
   
      </Routes>
    </Router>
  );
};

export default RoutesConfig;

