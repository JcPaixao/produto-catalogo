import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import ProdutoForm from '../components/ProdutoForm';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simulando uma API com dados fictícios
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: 'Caderno',
          preco: '15.00',
          descricao: 'Caderno de 10 matérias',
          imagem: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          nome: 'Caneta',
          preco: '2.50',
          descricao: 'Caneta azul',
          imagem: 'https://via.placeholder.com/100'
        }
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Catálogo de Produtos</h1>
      
      <ProdutoForm adicionarProduto={adicionarProduto} />

      <hr />

      <h2>Lista de Produtos</h2>
      
      {carregando ? (
        <p>carregando...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
      )}
    </div>
  );
};

export default Home;
