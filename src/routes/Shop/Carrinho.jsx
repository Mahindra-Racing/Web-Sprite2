import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { DollarSign, Trash2, Plus, Minus, ShoppingCart, User, CreditCard, ArrowLeft } from 'lucide-react';
import './Carrinho.css';

const Carrinho = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Cria a instância do navigate

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartWithQuantities = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1, // Garante que a quantidade sempre comece em 1
    }));
    setCartItems(cartWithQuantities);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleContinue = () => {
    // Lógica para continuar para a próxima etapa
    alert("Continuando para a próxima etapa!");
  };

  const handleGoToShop = () => {
    alert("Voltando para a loja...");
    navigate('/Shop'); // Redireciona para a página de loja
  };

  // Dados dos produtos para "Aproveite e leve também"
  const recommendedProducts = [
    {
      id: 1,
      name: 'Formula E Camo Cap',
      price: 280,
      image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9d8935fd/images/large/701223397001_pp_03_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
      
    },
    {
      id: 2,
      name: 'Formula E Change Accelerated Hoodie',
      price: 790,
      image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c1c6a2a/images/large/701223395001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
     
    },
    {
      id: 3,
      name: 'Formula E Packable Backpack',
      price: 380,
      image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08b14011/images/large/701223600001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
      
    },
    {
      id: 4,
      name: 'Formula E Tonal Hoodie',
      price: 750,
      image: 'https://store.fiaformulae.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa81500a3/images/large/701223399001_pp_01_FormulaES9.jpg?sw=1600&sh=1600&sm=fit',
    }
  ];

  return (
    <div className="carrinho-containerCAR">
      {/* Step de progresso com ícones */}
      <div className="progress-stepCAR">
        <div className="stepCAR">
          <ShoppingCart size={20} /> 1. Carrinho
        </div>
        <div className="stepCAR">
          <User size={20} /> 2. Identificação
        </div>
        <div className="stepCAR">
          <CreditCard size={20} /> 3. Pagamento
        </div>
      </div>

      <h1 className="carrinho-titleCAR">Seu Carrinho</h1>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-itemCAR">
              <img src={item.image} alt={item.name} className="cart-item-imageCAR" />
              <div className="cart-item-detailsCAR">
                <h2>{item.name}</h2>
                <p>
                  <DollarSign size={15} style={{ verticalAlign: 'middle' }} />
                  {item.price}
                </p>
                <div className="quantity-controlsCAR">
                  <button onClick={() => updateQuantity(index, -1)} className="quantity-btnCAR">
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)} className="quantity-btnCAR">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button className="remove-buttonCAR" onClick={() => removeFromCart(index)}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          <h2 className="total-priceCAR">Total: ${calculateTotal()}</h2>

          {/* Botão de Continuar */}
          <button className="continue-buttonCAR" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      ) : (
        <div>
          <p className="empty-cartCAR">Seu carrinho está vazio.</p>
          
          {/* Botão de Voltar para Loja */}
          <button className="back-to-shopCAR" onClick={handleGoToShop}>
            <ArrowLeft size={20} /> Voltar para a Loja
          </button>
        </div>
      )}

      {/* Container "Aproveite e leve também" */}
      <div className="recommended-containerCAR">
        <h2>Aproveite e leve também</h2>
        <div className="recommended-productsCAR">
          {recommendedProducts.map(product => (
            <div key={product.id} className="recommended-cardCAR">
              <img src={product.image} alt={product.name} className="recommended-product-imageCAR" />
              <h3 className='tittle-apro-CAR'>{product.name}</h3>
              <p>
                <DollarSign size={15} style={{ verticalAlign: 'middle' }} />
                {product.price}
              </p>
              <button 
                className="add-to-cart-buttonCAR" 
                onClick={() => navigate('/Shop')} // Redireciona para a página de loja ao clicar
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
