import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import ProdutoForm from '../components/ProdutoForm';
import './Home.css';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma chamada à API com um atraso de 2 segundos
    const mockProdutos = [
      {
        id: 1,
        nome: "Monitor 24' Full HD",
        preco: 800.50,
        descricao: "Monitor LED com ótima qualidade de imagem para jogos e trabalho.",
        imagem: "https://via.placeholder.com/150/0000FF/808080?text=Monitor"
      },
      {
        id: 2,
        nome: "Mouse Gamer",
        preco: 120.00,
        descricao: "Mouse ergonômico com 6 botões configuráveis.",
        imagem: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Mouse"
      }
    ];

    const timer = setTimeout(() => {
      setProdutos(mockProdutos);
      setLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  const handleAddProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div className="home-container">
      <h1>Catálogo de Produtos</h1>
      
      <ProdutoForm onAddProduto={handleAddProduto} />

      <div className="produtos-section">
        <h2>Produtos Cadastrados</h2>
        
        {loading ? (
          <p className="loading-message">Carregando produtos...</p>
        ) : produtos.length > 0 ? (
          <div className="produtos-lista">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                imagem={produto.imagem}
              />
            ))}
          </div>
        ) : (
          <p className="empty-message">Nenhum produto cadastrado no catálogo.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
