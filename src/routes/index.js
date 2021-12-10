import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/pages/Home';
import AboutUs from '../components/pages/AboutUs'
import Products from '../components/pages/Products'
import ProdutoUnid from '../components/pages/ProdutoUnid';
import Carrinho from '../components/pages/Carrinho';


const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobrenos" element={<AboutUs />} />
        <Route path="produtos/categorias/1" element={<Products escolha="produtos/categorias/1" />} />
        <Route path="produtos/categorias/2" element={<Products escolha="produtos/categorias/2" />} />
        <Route path="produtos/categorias/3" element={<Products escolha="produtos/categorias/3" />} />
        <Route path="produtos/categorias/4" element={<Products escolha="produtos/categorias/4" />} />
        <Route path="produtos" element={<Products escolha="produtos" />}/>
        <Route path="produtos/:id" element={<ProdutoUnid
        />} />
        <Route path="carrinho" element={<Carrinho
        />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;