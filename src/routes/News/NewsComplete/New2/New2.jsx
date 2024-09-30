import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/img/banner1.png"
import banner2 from "../../../../assets/img/banner3.png"
import img1 from "../../../../assets/img/carro1.png"
import img2 from "../../../../assets/img/img2.png"
import img4 from "../../../../assets/img/img5.png"
import new1 from "../../../../assets/img/new1.png"
import new3 from "../../../../assets/img/new3.png"
import "./New2.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">Guenther is announced at Penske</h1>
                    <p className="descricao-paragrafo2">Maximilian Guenther will race for DS Penske in the upcoming 2024-25 Formula E campaign alongside double champion Jean-Eric Vergne.</p>
                    <p className="descricao-data2">Sep 10, 2024</p>
                </div>
                <div className="main-container3">
                    <div className="carousel3">
                        <div className="carousel-container3">
                            <div className="carousel-item3">
                                <img src={new1} alt="Imagem1" title="Imagem1" />
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
                    <p>The German will take the place of 2021/22 champion Stoffel Vandoorne, who was confirmed as having joined Maserati MSG back in July.
                        <br /><br />
                        The 27-year-old joins DS Penske having spent two seasons with Maserati MSG, during which time he won two races in Jakarta and Tokyo but lacked consistency to mount a title tilt as he finished seventh and eighth in the drivers' standings respectively.
                        <br /><br />
                        Prior to his two-year tenure with Maserati MSG, Guenther had spent a year with Nissan and two season at BMW, scoring three wins with the German manufacturer.
                        <br /><br />
                        He made his Formula E debut in the 2018-19 season with Dragon, the team operated by Jay Penske who is now the team principal of DS Penske as the two reunite.
                        <br /><br />
                        “I’m very happy to be joining DS Penske, a powerhouse in the championship and a project with strong vision," said Guenther.
                        <br /><br />
                        "We share the same ambitions and are all driven to be at the top of Formula E. Representing DS Performance, a manufacturer which has won several championships already is a real privilege.
                        <br /><br />
                        "Same for being team-mates with a champion like Jean-Eric, it’s something I really look forward to. A very special element for me is to drive for Jay’s team again, he brought me into the championship when I was 20-years-old. I’m proud to be part of the team and excited of what we will build together in the future.”</p>
                </div>

                <div className="img-news">
                    <img src='//cdn.motorsport.com/images/mgl/0rGmRaJ2/s1000/max-gunther-ds-penske.jpg' alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>Guenther's signing leaves only a handful of places on the grid yet to be confirmed, including the second seat at Nissan, both ERT positions and team-mate to Lucas di Grassi at Abt.
                        <br /><br />
                        Eugenio Franzetti, DS performance director, added: “We are delighted to welcome Maximilian Guenther into our team!
                        <br /><br />
                        "He’s an ambitious and fighting driver who will be able to bring us podiums as well as many points. I’m sure that his partnership with Jean-Eric will be very efficient and that we will be able to challenge the winners of Season 10, in order to do even better in this Season 11 that is about to begin!”</p>
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