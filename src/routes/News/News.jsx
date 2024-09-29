import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/img/carro1.png";
import new2 from "../../assets/img/new2.png" 
import new4 from "../../assets/img/new4.png"
import new1 from "../../assets/img/new1.png"
  
import new3 from "../../assets/img/new3.png" 
import img1 from "../../assets/img/img5.png"
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner3.png";
import "./News.css";

const Home = () => {
    return (
        <main className="    background-color: #f0f4f8;">
            <div id="section2">
                <div className="main-container2">
                    <div className="carousel2">
                        <div className="carousel-container2">
                            <div className="carousel-item2">
                                <img src={banner1} alt="Imagem1" title="Imagem1" />
                            </div>
                        </div>
                    </div>

                    <div className="side-content2">
                        <div className="side-noticias2">
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new1} alt="Imagem1" title="Imagem1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">Guenther é anunciado na Penske</h1>
                                        <p className="noticia-paragrafo">Maximilian Guenther correrá pela DS Penske na próxima temporada...</p>
                                        <p className="noticia-data">10 set 2024</p>
                                    </div>
                                </div>
                            </a>

                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new2} alt="Imagem1" title="Imagem1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">"Continua trazendo dinheiro"</h1>
                                        <p className="noticia-paragrafo">É o que o Vice-campeão da F-E, <span><b>Mitch Evans</b></span> comenta sobre a permanência de Pérez na Red Bull...</p>
                                        <p className="noticia-data">16 ago 2024</p>
                                    </div>
                                </div>
                            </a>
                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new3} alt="Imagem1" title="Imagem1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">Gen3 Evo estreia ainda esse ano</h1>
                                        <p className="noticia-paragrafo">Nova atualização dos veículos pode acelerar de 0 a 96 km/h em apenas 1,82 segundos...</p>
                                        <p className="noticia-data">23 set 20024</p>
                                    </div>
                                </div>
                            </a>
                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new4} alt="Imagem1" title="Imagem1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">"maior e melhor"</h1>
                                        <p className="noticia-paragrafo">É o que o confundador da F-E sobre o ecento em São Paulo...</p>
                                        <p className="noticia-data">10 set 20024</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="descricao-news">
                    <Link to="/News/0001" className="link-descricao">
                        <h1 className="descricao-titulo">Fórmula E quebra recordes: Reem Al Aboud</h1>
                        <p className="descricao-paragrafo">Na semana do Dia Internacional da Mulher, a piloto saudita <span><b> Reem Al Aboud</b></span> estabeleceu um novo recorde de aceleração para carros monopostos de corrida, a bordo de um Fórmula E, superando o antigo recorde de um Fórmula 1.</p>
                    </Link>
                    <p className="descricao-data">6 mar 2024</p>
                </div>
                <div className="linha-noticias">
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Chefão da Fórmula E diz estar ansioso por estreia em São Paulo</h4>
                        <p className="caixa-paragrafo">São Paulo acelera preparativos para receber o e-Prix...</p>
                        <div className="caixa-footer"><p className="caixa-data">10 set 2024</p><a href="#" className="caixa-data-btn">Saiba mais ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Ingressos para E-Prix São Paulo da Fórmula E já estão à venda</h4>
                        <p className="caixa-paragrafo">Etapa de São Paulo, marcada para 7 de dezembro de 2024...</p>
                        <div className="caixa-footer"><p className="caixa-data">21 ago 2024</p><a href="#" className="caixa-data-btn">Saiba mais ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Pascal Wehrlein, da Porsche, é campeão da Fórmula E, em 2024</h4>
                        <p className="caixa-paragrafo">Piloto alemão conquista uma vitória e um segundo lugar na rodada dupla...</p>
                        <div className="caixa-footer"><p className="caixa-data">22 jul 2024</p><a href="#" className="caixa-data-btn">Saiba mais ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Fórmula E confirma abertura da nova temporada em São Paulo</h4>
                        <p className="caixa-paragrafo">E-Prix de São Paulo será disputado no circuito de rua...</p>
                        <div className="caixa-footer"><p className="caixa-data">10 set 2024</p><a href="#" className="caixa-data-btn">Saiba mais ❯</a></div>
                    </div>
                </div>
                <div className="hero-premium">
                    <img src={img2} alt="" />
                    <h1>Assine nosso plano premium</h1>
                    <button className="hero-btn">Saiba mais ❯</button>
                </div>

                <div className="containerProduto3">
                    <div className="product-header2">
                        <h1 className="product-titulo2">TRENDING NOW</h1>
                    </div>
                    <hr className="hr2" />
                    <div className="product-container2">
                        <div className="product2">
                            <div className="product-image2">
                                <img src={banner1} alt="" />
                            </div>
                            <p>Fórmula E quebra recordes: Piloto mulher</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={banner2} alt="" />
                            </div>
                            <p>Top 10 best drivers of season 10</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={new1} alt="Product 3" />
                            </div>
                            <p>Guenther é anunciado na Penske</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={new3} alt="Product 4" />
                            </div>
                            <p>Gen3 Evo estreia ainda esse ano</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={img1} alt="Product 5" />
                            </div>
                            <p>Ingressos para E-Prix São Paulo da Fórmula E já estão à venda</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home