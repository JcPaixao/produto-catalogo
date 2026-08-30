import React from 'react';

const ProdutoCard = ({ nome, preco, imagem, descricao }) => {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '200px' }}>
      <img src={imagem} alt={nome} style={{ width: '100px' }} />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <p>R$ {preco}</p>
    </div>
  );
};

export default ProdutoCard;
