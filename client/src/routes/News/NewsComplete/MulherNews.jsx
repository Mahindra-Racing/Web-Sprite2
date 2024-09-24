import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/img/banner1.png"
import banner2 from "../../../assets/img/banner3.png"
import img1 from "../../../assets/img/carro1.png"
import img2 from "../../../assets/img/img2.png"
import img3 from "../../../assets/img/img3.png"
import story1 from "../../../assets/img/story1.png"
import story2 from "../../../assets/img/story2.png"
import story3 from "../../../assets/img/story3.png"
import story6 from "../../../assets/img/story6.png"
import "./MulherNews.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">Fórmula E quebra recordes: Reem Al Aboud</h1>
                    <p className="descricao-paragrafo2">Na semana do Dia Internacional da Mulher, a piloto saudita <span><b> Reem Al Aboud</b></span> estabeleceu um novo recorde de aceleração para carros monopostos de corrida, a bordo de um Fórmula E, superando o antigo recorde de um Fórmula 1.</p>
                    <p className="descricao-data2">6 mar 2024</p>
                </div>
                <div className="main-container3">
                    <div className="carousel3">
                        <div className="carousel-container3">
                            <div className="carousel-item3">
                                <img src={banner1} alt="Imagem1" title="Imagem1" />
                            </div>
                        </div>
                    </div>

                    <div className="side-content1">
                        <div className="side-titulo">
                            <h3>Relacionado</h3>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <a href="#" className="noticia">
                                <h3 className="side-titulo3">Chefão da Fórmula E diz estar ansioso por estreia em São Paulo</h3>
                                <p  className="side-paragrafo3">São Paulo acelera preparativos para receber o e-Prix...</p>
                            </a>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <a href="#" className="noticia">
                                <h3 className="side-titulo3">Ingressos para E-Prix São Paulo da Fórmula E já estão à venda</h3>
                                <p  className="side-paragrafo3">Etapa de São Paulo, marcada para 7 de dezembro de 2024...</p>
                            </a>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <a href="#" className="noticia">
                                <h3 className="side-titulo3">Pascal Wehrlein, da Porsche, é campeão da Fórmula E, em 2024</h3>
                                <p  className="side-paragrafo3">Piloto alemão conquista uma vitória e um segundo lugar na rodada dupla...</p>
                            </a>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <a href="#" className="noticia">
                                <h3 className="side-titulo3">
                                Fórmula E confirma abertura da nova temporada em São Paulo</h3>
                                <p  className="side-paragrafo3">E-Prix de São Paulo será disputado no circuito de rua...</p>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="text-news">
                    <p>Na semana do <span><b>Dia Internacional da Mulher</b></span>, a piloto saudita <span><b>Reem Al</b></span> Aboud estabeleceu um novo recorde de aceleração para carros monopostos de corrida, a bordo de um <span><b>Fórmula E</b></span>, superando o antigo recorde de um Fórmula 1. Ela acelerou de <span><b>0 a 60 milhas por hora</b></span> (o equivalente a 0 a 96 km/h ou 27 m/s) em <span><b>2,49 segundos</b></span>, 11 centésimos de segundo mais rápido que a marca anterior, de 2,60 s. <span><b>Assista ao vídeo mais abaixo nesta página.</b></span> 
                    <br /><br />A marca histórica, descrita pela Fórmula E como "um momento marcante para o automobilismo", foi alcançada em Londres, em 6 de março de 2024, com o carro de corrida elétrico GenBeta da Fórmula E, um veículo Gen3 "desbloqueado", ou seja, o mesmo carro utilizado nas corridas da categoria, mas sem as limitações eletrônicas ou de regulamento. Assim, o carro utilizado para o recorde contou com 400 kW de potência (543,8 cv) e algumas melhorias dos parceiros da Fórmula E: Hankook Tire, Sabic, ABB e Google Cloud.
                    <br /><br />Além de estabelecer um novo recorde provando a maior eficiência dos veículos 100% elétricos, o feito de Al Aboud contribuiu para a missão da Fórmula E de quebrar barreiras para as mulheres no automobilismo.</p>
                </div>

                <div className="img-news">
                    <img src={img2} alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>"Fazer parte deste momento marcante é a realização de um sonho. Não se trata apenas de velocidade; trata-se de quebrar barreiras e mostrar o imenso potencial das mulheres no automobilismo. A Fórmula E me deu a plataforma para fazer uma declaração, e eu me sinto honrada por fazer parte desta jornada em direção à igualdade de gênero nas corridas", falou a piloto saudita, logo após o feito.
                    <br /><br />"O marco alcançado por Reem é uma prova do que defendemos na Fórmula E: inovação, igualdade e competição. Seu sucesso não é apenas uma vitória para a Fórmula E, mas um salto em frente para a inclusão nas corridas, e todos nós nos juntamos a ela na celebração deste marco, especialmente na semana do Dia Internacional da Mulher", afirmou Jeff Dodds, CEO da Fórmula E.
                    <br /><br /><span><b>Confira o vídeo:</b></span></p>
                </div>

                <div className="video-container">
                    <iframe
                        width="965"
                        height="542"
                        src="https://www.youtube.com/embed/e23n9ajPrv4"
                        title="Formula E Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="hero-premium">
                    <img src={img1} alt="" />
                    <h1>Assine nosso plano premium</h1>
                    <button className="hero-btn">Saiba mais ❯</button>
                </div>

                <div className="containerProduto2">
                    <div className="product-header2">
                        <h1 className="product-titulo2">TRENDING NOW</h1>
                        <a href="#" className="ver-mais2">Ver Mais ❯</a>
                    </div>
                    <hr className="hr2" />
                    <div className="product-container2">
                        <div className="product2">
                            <div className="product-image2">
                                <img src={img3} alt="" />
                            </div>
                            <p>Fórmula E 2025: estreia em São Paulo</p>
                        </div>
                        <div className="produc2">
                            <div className="product-image">
                                <img src={banner2} alt="" />
                                <p>Top 10 best drivers of season 10</p>
                            </div>
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