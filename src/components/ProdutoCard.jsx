import React from 'react';
import './ProdutoCard.css';

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} className="produto-imagem" />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p className="produto-descricao">{descricao}</p>
        <p className="produto-preco">R$ {Number(preco).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProdutoCard;
