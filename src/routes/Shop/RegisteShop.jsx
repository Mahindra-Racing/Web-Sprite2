import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, DollarSign, Image, CheckCircle, AlertCircle } from 'lucide-react';
import './RegisterShop.css';

const RegisterShop = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productImageFile, setProductImageFile] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleImageFileChange = (e) => {
    setProductImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      image: productImageFile ? URL.createObjectURL(productImageFile) : productImageUrl,
    };

    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setMessage('Produto registrado com sucesso!');
        setMessageType('success');
        setProductName('');
        setProductPrice('');
        setProductImageUrl('');
        setProductImageFile(null);
      } else {
        setMessage('Falha ao registrar o produto.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Erro na conexão com a API.');
      setMessageType('error');
    }
  };

  const goToMarketplace = () => {
    navigate('/marketplace');
  };

  return (
    <div className="register-shop-container">
      <header className="register-shop-header">
        <h1 className="register-shop-title">Registrar Produto</h1>
        <button className="back-to-marketplace" onClick={goToMarketplace}>
          <ArrowLeft size={18} className="back-icon" />
          Voltar para o Marketplace
        </button>
      </header>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">
              <Package size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Nome do Produto:
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              placeholder="Digite o nome do produto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">
              <DollarSign size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Preço do Produto:
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              placeholder="Digite o preço do produto"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImageUrl">
              <Image size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              URL da Imagem ou selecione uma imagem:
            </label>
            <input
              type="text"
              id="productImageUrl"
              value={productImageUrl}
              onChange={(e) => setProductImageUrl(e.target.value)}
              placeholder="Digite a URL da imagem do produto"
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              id="productImageFile"
              accept="image/*"
              onChange={handleImageFileChange}
            />
          </div>
          <button type="submit" className="submit-button">Registrar Produto</button>
        </form>
      </div>
      {message && (
        <div className={`message ${messageType}`}>
          {messageType === 'success' ? (
            <CheckCircle size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          ) : (
            <AlertCircle size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          )}
          {message}
        </div>
      )}
    </div>
  );
};

export default RegisterShop;
