import React from 'react';
import './ProdutoCard.css';

const ProdutoCard = ({ nome, preco, imagem, descricao }) => {
  return (
    <div className="produto-card">
      <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} className="produto-img" />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p className="produto-descricao">{descricao}</p>
        <p className="produto-preco">R$ {parseFloat(preco).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProdutoCard;
