import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/img/carro1.png";
import new2 from "../../assets/img/new2.png";
import new4 from "../../assets/img/new4.png";
import new1 from "../../assets/img/new1.png";
import new3 from "../../assets/img/new3.png";
import img1 from "../../assets/img/img5.png";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner3.png";
import "./News.css";

const Home = () => {
    return (
        <main className="mainNews">
            <div id="section2">
                <div className="main-container2">
                    <div className="carousel2">
                        <div className="carousel-container2">
                            <div className="carousel-item2">
                                <img src={banner1} alt="Image1" title="Image1" />
                            </div>
                        </div>
                    </div>

                    <div className="side-content2">
                        <div className="side-noticias2">
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new1} alt="Image1" title="Image1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">Guenther is announced at Penske</h1>
                                        <p className="noticia-paragrafo">Maximilian Guenther will race for DS Penske next season...</p>
                                        <p className="noticia-data">Sep 10, 2024</p>
                                    </div>
                                </div>
                            </a>

                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new2} alt="Image1" title="Image1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">“He continues to bring money”</h1>
                                        <p className="noticia-paragrafo">That's what F-E Vice Champion <span><b>Mitch Evans</b></span> says about Pérez's stay at Red Bull...</p>
                                        <p className="noticia-data">Aug 16, 2024</p>
                                    </div>
                                </div>
                            </a>
                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new3} alt="Image1" title="Image1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">Gen3 Evo debuts this year</h1>
                                        <p className="noticia-paragrafo">The new update of the vehicles can accelerate from 0 to 96 km/h in just 1.82 seconds...</p>
                                        <p className="noticia-data">Sep 23, 2024</p>
                                    </div>
                                </div>
                            </a>
                            <hr className="hr3"/>
                            <a href="#" className="noticia-link">
                                <div className="side-text">
                                    <img src={new4} alt="Image1" title="Image1" />
                                    <div className="texto-container">
                                        <h1 className="noticia-titulo">“Bigger and better”</h1>
                                        <p className="noticia-paragrafo">That's what the co-founder of F-E says about the event in São Paulo...</p>
                                        <p className="noticia-data">Sep 10, 2024</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="descricao-news">
                    <Link to="/News/0001" className="link-descricao">
                        <h1 className="descricao-titulo">Formula E breaks records: Reem Al Aboud</h1>
                        <p className="descricao-paragrafo">During International Women's Day week, Saudi driver <span><b>Reem Al Aboud</b></span> set a new acceleration record for single-seater racing cars, aboard a Formula E, surpassing the old record of a Formula 1.</p>
                    </Link>
                    <p className="descricao-data">Mar 6, 2024</p>
                </div>
                <div className="linha-noticias">
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Formula E boss says he is looking forward to debut in São Paulo</h4>
                        <p className="caixa-paragrafo">São Paulo accelerates preparations to host the e-Prix...</p>
                        <div className="caixa-footer"><p className="caixa-data">Sep 10, 2024</p><a href="#" className="caixa-data-btn">Learn more ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Tickets for the Formula E São Paulo E-Prix are already on sale</h4>
                        <p className="caixa-paragrafo">São Paulo stage, scheduled for December 7, 2024...</p>
                        <div className="caixa-footer"><p className="caixa-data">Aug 21, 2024</p><a href="#" className="caixa-data-btn">Learn more ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Porsche's Pascal Wehrlein is the Formula E champion in 2024</h4>
                        <p className="caixa-paragrafo">German driver clinches one victory and one second place in the doubleheader...</p>
                        <div className="caixa-footer"><p className="caixa-data">Jul 22, 2024</p><a href="#" className="caixa-data-btn">Learn more ❯</a></div>
                    </div>
                    <hr />
                    <div className="caixa-noticias">
                        <h4 className="caixa-titulo">Formula E confirms the opening of the new season in São Paulo</h4>
                        <p className="caixa-paragrafo">São Paulo E-Prix will be held on the street circuit...</p>
                        <div className="caixa-footer"><p className="caixa-data">Sep 10, 2024</p><a href="#" className="caixa-data-btn">Learn more ❯</a></div>
                    </div>
                </div>
                <div className="hero-premium">
                    <img src={img2} alt="" />
                    <h1>Subscribe to our premium plan</h1>
                    <button className="hero-btn">Learn more ❯</button>
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
                            <p>Formula E breaks records: Female driver</p>
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
                            <p>Guenther is announced at Penske</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={new3} alt="Product 4" />
                            </div>
                            <p>Gen3 Evo debuts this year</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={img1} alt="Product 5" />
                            </div>
                            <p>Tickets for the Formula E São Paulo E-Prix are already on sale</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
