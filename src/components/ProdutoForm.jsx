import React, { useState } from 'react';
import './ProdutoForm.css';

function ProdutoForm({ adicionarProduto }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !descricao) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    adicionarProduto({
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      descricao,
      imagem: '' // Optional, we'll use placeholder if empty
    });

    setNome('');
    setPreco('');
    setDescricao('');
  };

  return (
    <form className="produto-form" onSubmit={handleSubmit}>
      <h2>Adicionar Novo Produto</h2>
      
      <div className="form-group">
        <label htmlFor="nome">Nome do Produto:</label>
        <input 
          type="text" 
          id="nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="preco">Preço (R$):</label>
        <input 
          type="number" 
          id="preco" 
          step="0.01" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição:</label>
        <textarea 
          id="descricao" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          required 
        />
      </div>

      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default ProdutoForm;
