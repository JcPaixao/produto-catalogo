import React, { useState } from 'react';

const ProdutoForm = ({ adicionarProduto }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoProduto = {
      id: Date.now(),
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: 'https://via.placeholder.com/100'
    };
    
    adicionarProduto(novoProduto);
    
    // Limpar o formulário
    setNome('');
    setPreco('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Cadastrar Produto</h3>
      <div>
        <label>Nome: </label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Preço: </label>
        <input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} required />
      </div>
      <div>
        <label>Descrição: </label>
        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Salvar Produto</button>
    </form>
  );
};

export default ProdutoForm;
