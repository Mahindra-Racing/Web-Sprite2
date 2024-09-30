import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/img/banner1.png"
import banner2 from "../../../../assets/img/banner3.png"
import img1 from "../../../../assets/img/carro1.png"
import img4 from "../../../../assets/img/img5.png"
import new1 from "../../../../assets/img/new1.png"
import new3 from "../../../../assets/img/new3.png"
import "./New5.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">Co-founder promises "bigger and better" event in São Paulo</h1>
                    <p className="descricao-paragrafo2">São Paulo will be the big debut of the 2024-25 Formula E season . Alberto Longo , co-founder of the electric single-seater category, said in a press conference that the event will be "bigger and better".</p>
                    <p className="descricao-data2">Sep 10, 2024</p>
                </div>
                <div className="main-container3">
                    <div className="carousel3">
                        <div className="carousel-container3">
                            <div className="carousel-item3">
                                <img src='https://cdn-5.motorsport.com/images/amp/0rGnodO2/s1000/alberto-longo-ceo-formula-e.jpg' alt="Imagem1" title="Imagem1" />
                            </div>
                        </div>
                    </div>

                    <div className="side-content1">
                        <div className="side-titulo">
                            <h3>Related News</h3>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <div className="noticia">
                                <h3 className="side-titulo3">Formula E boss says he is looking forward to debut in São Paulo</h3>
                                <p className="side-paragrafo3">São Paulo accelerates preparations to host the e-Prix</p>
                            </div>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <div href="#" className="noticia">
                                <h3 className="side-titulo3">Tickets for the Formula E E-Prix São Paulo are now on sale</h3>
                                <p className="side-paragrafo3">São Paulo stage, scheduled for December 7, 2024</p>
                            </div>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <div href="#" className="noticia">
                                <h3 className="side-titulo3">Porsche's Pascal Wehrlein is Formula E champion in 2024</h3>
                                <p className="side-paragrafo3">German driver wins a victory and second place in the double round</p>
                            </div>
                        </div>
                        <hr />
                        <div className="side-text1">
                            <div href="#" className="noticia">
                                <h3 className="side-titulo3">
                                    Formula E confirms opening of new season in São Paulo</h3>
                                <p className="side-paragrafo3">São Paulo E-Prix will be held on the street circuit</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-news">
                    <p>Lucas Di Grassi , who will race for a new team in 2024-25 with factory partner Yamaha-Lola, a newcomer to the category, praised the new cars, citing the "thousand kilometers of testing" already completed with the Japanese manufacturer's single-seater.
                        <br /><br />
                        As explained by the Brazilian driver, the stage will be the starting point for the new version of the cars, the Gen3 EVO , which promises to accelerate from 0 to 100km/h in just 1.8 seconds, compared to the previous 2.8s, as well as four-wheel drive when the cars enter "attack mode", allowing more overtaking, even on tracks like Monaco.
                        <br /><br />
                        Other changes include new tires, with a higher percentage of recycled compounds, and remodeled aerodynamics.  Longo emphasized the technological evolution of the category as an objective and how he believes he has participated in the process of advancement of electric cars in the world.
                        <br /><br />
                        In addition, he mentioned as other focuses the growth of the category, which he called "baby", compared to other historical categories; leadership in sustainable sports and visits to "incredible" cities around the world.
                        <br /><br />
                        In addition, the mayor of São Paulo, Ricardo Nunes, was present at the press conference. The São Paulo EP has been taking place since the 2022-23 season, with victories by Mitch Evans and Sam Bird , but with changes to the calendar each year.</p>
                </div>

                <div className="hero-premium">
                    <img src={img1} alt="" />
                    <h1>Subscribe to our premium plan</h1>
                    <button className="hero-btn">Leand more ❯</button>
                </div>

                <div className="containerProduto2">
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
                            <p>Gen3 Evo debuts later this year</p>
                        </div>
                        <div className="product2">
                            <div className="product-image2">
                                <img src={img4} alt="Product 5" />
                            </div>
                            <p>Tickets for the Formula E E-Prix São Paulo are now on sale</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home