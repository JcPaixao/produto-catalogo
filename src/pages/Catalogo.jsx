import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import ProdutoForm from '../components/ProdutoForm';
import './Catalogo.css';

const MOCK_PRODUTOS = [
  {
    id: 1,
    nome: 'Notebook Gamer',
    preco: 4500.00,
    descricao: 'Notebook com placa de vídeo dedicada e processador de alta performance.',
    imagem: 'https://via.placeholder.com/150/0000FF/808080?text=Notebook'
  },
  {
    id: 2,
    nome: 'Smartphone',
    preco: 2500.00,
    descricao: 'Smartphone com câmera de alta resolução e tela OLED.',
    imagem: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Smartphone'
  }
];

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simula o carregamento da API
  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos(MOCK_PRODUTOS);
      setCarregando(false);
    }, 2000); // 2 segundos de loading simulado

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Produtos</h1>
      
      <ProdutoForm adicionarProduto={adicionarProduto} />

      {carregando ? (
        <div className="loading">Carregando produtos...</div>
      ) : (
        <div className="lista-produtos">
          {produtos.length > 0 ? (
            produtos.map(produto => (
              <ProdutoCard 
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              />
            ))
          ) : (
            <p>Nenhum produto cadastrado.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Catalogo;
