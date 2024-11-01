import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, DollarSign, Loader, ShoppingCart } from 'lucide-react';
import './Marketplace.css';

const Marketplace = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const goToRegisterPage = () => {
        navigate('/register-shop');
    };

    const goToShopPage = () => {
        navigate('/shop');
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const addToCart = (product) => {
        console.log(`Produto ${product.name} adicionado ao carrinho!`);
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://bd-web-ruddy.vercel.app/products');
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Data received:', data);
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar produtos da API", error);
            setError(true);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesColor = colorFilter ? product.color === colorFilter : true;
        const matchesSize = sizeFilter ? product.size === sizeFilter : true;
        const matchesMinPrice = minPrice ? product.price >= parseFloat(minPrice) : true;
        const matchesMaxPrice = maxPrice ? product.price <= parseFloat(maxPrice) : true;

        return matchesSearchTerm && matchesColor && matchesSize && matchesMinPrice && matchesMaxPrice;
    });

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
                    src="https://i0.wp.com/maquinadoesporte.com.br/wp-content/uploads/2024/03/Formula_E_iguatemi.png?fit=1024,512&ssl=1"
                    alt="Banner Marketplace"
                    className="banner-imageMarketplace"
                />
            </section>

            <section className="filter-sectionMarketplace">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter-inputMarketplace"
                />
                <select
                    value={colorFilter}
                    onChange={(e) => setColorFilter(e.target.value)}
                    className="filter-selectMarketplace"
                >
                    <option value="">Filter by color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
                <select
                    value={sizeFilter}
                    onChange={(e) => setSizeFilter(e.target.value)}
                    className="filter-selectMarketplace"
                >
                    <option value="">Filter by size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
                <div className="price-filtersMarketplace">
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="filter-inputMarketplace"
                    />
                    <span className="price-separatorMarketplace">-</span>
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="filter-inputMarketplace"
                    />
                </div>
            </section>

            <section className="products-sectionMarketplace">
                <h2 className="product-section-titleMarketplace">Available Products</h2>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <Loader size={40} className="animate-spin" />
                        <p>Loading products...</p>
                    </div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>
                    </div>
                ) : (
                    <div className="products-containerMarketplace">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div key={product.id} className="product-cardMarketplace" onClick={() => openModal(product)}>
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

            {isModalOpen && selectedProduct && (
                <div className="modalMarketplace">
                    <div className="modal-contentMarketplace">
                        <span className="close-modalMarketplace" onClick={closeModal}>&times;</span>
                        <h2 className="modal-titleMarketplace">{selectedProduct.name}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-imageMarketplace" />
                        <p className="modal-priceMarketplace">
                            <DollarSign size={18} style={{ verticalAlign: 'middle' }} />
                            {selectedProduct.price.toFixed(2)}
                        </p>
                        <button className="add-to-cart-buttonMarketplace" onClick={() => addToCart(selectedProduct)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Marketplace;
