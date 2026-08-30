import React, { useState } from 'react';
import './ProdutoForm.css';

const ProdutoForm = ({ onAddProduto }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !descricao) {
      alert('Por favor, preencha os campos obrigatórios (Nome, Preço, Descrição).');
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
      descricao,
      imagem
    };

    onAddProduto(novoProduto);

    setNome('');
    setPreco('');
    setDescricao('');
    setImagem('');
  };

  return (
    <form className="produto-form" onSubmit={handleSubmit}>
      <h2>Adicionar Novo Produto</h2>
      
      <div className="form-group">
        <label>Nome do Produto *</label>
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
          placeholder="Ex: Teclado Mecânico"
        />
      </div>

      <div className="form-group">
        <label>Preço *</label>
        <input 
          type="number" 
          step="0.01"
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          required 
          placeholder="Ex: 150.00"
        />
      </div>

      <div className="form-group">
        <label>Descrição *</label>
        <textarea 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          required 
          placeholder="Breve descrição do produto"
        />
      </div>

      <div className="form-group">
        <label>URL da Imagem</label>
        <input 
          type="text" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
          placeholder="URL de uma imagem (opcional)"
        />
      </div>

      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProdutoForm;
