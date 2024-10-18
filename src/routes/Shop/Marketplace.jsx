import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, Loader, ShoppingCart } from 'lucide-react';
import './marketplace.css';

const Marketplace = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const goToRegisterPage = () => {
        navigate('/register-shop');
    };

    const goToShopPage = () => {
        navigate('/shop'); // Supondo que a rota da loja seja "/shop"
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="mainMarketplace">
            <header className="headerMarketplace">
                <div className="header-contentMarketplace">
                    <div className="header-left">
                        <img
                            src="https://d1hbpr09pwz0sk.cloudfront.net/logo_url/formula-e-b57424c9"
                            alt="Logo Formula E"
                            className="header-imageMarketplace"
                        />
                        <div className="header-textMarketplace">
                            <h1 className="shop-titleMarketplace">Marketplace</h1>
                            <p className="shop-descriptionMarketplace">Encontre os melhores produtos para sua equipe de Fórmula E.</p>
                        </div>
                    </div>
                    <div className="header-buttons">
                        <button className="register-buttonMarketplace" onClick={goToRegisterPage}>
                            <Package size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Register New Product
                        </button>
                        <button className="shop-buttonMarketplace" onClick={goToShopPage}>
                            <ShoppingCart size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            Voltar para a Loja
                        </button>
                    </div>
                </div>
            </header>

            <section className="bannerMarketplace">
                <img
                    src="https://www.pure-travel.co.za/wp-content/uploads/2020/05/NewYork-Eprix-banner.jpg"
                    alt="Banner Marketplace"
                    className="banner-imageMarketplace"
                />
            </section>

            <section className="products-sectionMarketplace">
                <h2 className="product-section-titleMarketplace">Available Products</h2>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <Loader size={40} className="animate-spin" />
                        <p>Loading products...</p>
                    </div>
                ) : (
                    <div className="products-containerMarketplace">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="product-cardMarketplace">
                                    <img src={product.image} alt={product.name} className="product-imageMarketplace" />
                                    <div className="product-infoMarketplace">
                                        <h3 className="product-nameMarketplace">{product.name}</h3>
                                        <p className="product-priceMarketplace">
                                            <DollarSign size={18} style={{ verticalAlign: 'middle' }} />
                                            {product.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', padding: '50px' }}>No products available</p>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Marketplace;
