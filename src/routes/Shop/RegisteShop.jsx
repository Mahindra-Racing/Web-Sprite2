import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, DollarSign, Image, CheckCircle, AlertCircle, FileText, Palette, Maximize } from 'lucide-react';
import './RegisterShop.css';

const RegisterShop = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productImageFile, setProductImageFile] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');

  const handleImageFileChange = (e) => {
    setProductImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se todos os campos obrigatórios estão preenchidos
    if (!productName || !productPrice || (!productImageUrl && !productImageFile) || !productColor || !productSize) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      image: productImageFile ? URL.createObjectURL(productImageFile) : productImageUrl,
      description: productDescription,
      color: productColor,
      size: productSize,
    };

    // Envie os dados para a API sem aguardar a resposta
    fetch('https://bd-web-ruddy.vercel.app/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    }).catch((error) => console.error('Erro ao registrar produto:', error));

    // Redireciona imediatamente para a página do marketplace
    navigate('/marketplace');
  };

  return (
    <div className="register-shop-container">
      <header className="register-shop-header">
        <h1 className="register-shop-title">Registrar Produto</h1>
        <button className="back-to-marketplace" onClick={() => navigate('/marketplace')}>
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
            <label htmlFor="productColor">
              <Palette size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Cor:
            </label>
            <select
              id="productColor"
              value={productColor}
              onChange={(e) => setProductColor(e.target.value)}
              required
            >
              <option value="">Selecione a cor</option>
              <option value="Red">Vermelho</option>
              <option value="Blue">Azul</option>
              <option value="Green">Verde</option>
              <option value="Black">Preto</option>
              <option value="White">Branco</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="productSize">
              <Maximize size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Tamanho:
            </label>
            <select
              id="productSize"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
              required
            >
              <option value="">Selecione o tamanho</option>
              <option value="S">Pequeno</option>
              <option value="M">Médio</option>
              <option value="L">Grande</option>
              <option value="XL">Extra Grande</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">
              <FileText size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Descrição:
            </label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Digite a descrição do produto"
              rows="4"
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
    </div>
  );
};

export default RegisterShop;