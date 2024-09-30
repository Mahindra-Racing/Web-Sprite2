import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/img/banner1.png"
import banner2 from "../../../../assets/img/banner3.png"
import img1 from "../../../../assets/img/carro1.png"
import img2 from "../../../../assets/img/img2.png"
import img4 from "../../../../assets/img/img5.png"
import new1 from "../../../../assets/img/new1.png" 
import new3 from "../../../../assets/img/new3.png" 
import "./MulherNews.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">Formula E breaks records: Reem Al Aboud</h1>
                    <p className="descricao-paragrafo2">During the week of International Women's Day, the Saudi driver <span><b> Reem Al Aboud</b></span> distributed a new traction disc for single-seater racing cars, aboard a Formula E, surpassing the old one registration of a Formula 1.</p>
                    <p className="descricao-data2">Mar 6, 2024</p>
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
                <p>In the week of <span><b>International Women's Day</b></span>, Saudi pilot <span><b>Reem Al</b></span> Aboud set a new record for acceleration for single-seater racing cars, aboard a <span><b>Formula E</b></span>, surpassing the old record for a Formula 1. It accelerated from <span><b>0 to 60 miles per hour</b></span> (the equivalent of 0 to 96 km/h or 27 m/s) in <span><b>2.49 seconds</b></span>, 11 hundredths of a second faster than the previous mark of 2.60 s. <span><b>Watch the video further down this page.</b></span> 
                    <br /><br />The historic milestone, described by Formula E as "a landmark moment for motorsport", was achieved in London on March 6, 2024, with the Formula E GenBeta electric racing car, a "unlocked" Gen3 vehicle, that is, the same car used in the category's races, but without the electronic or regulatory limitations. Thus, the car used for the record had 400 kW of power (543.8 hp) and some improvements from Formula E partners: Hankook Tire, Sabic, ABB and Google Cloud.
                    <br /><br />In addition to setting a new record proving the greater efficiency of 100% electric vehicles, Al Aboud's achievement contributed to Formula E's mission to break down barriers for women in motorsport.</p>
                </div>

                <div className="img-news">
                    <img src={img2} alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>"Being part of this landmark moment is a dream come true. It's not just about speed; it's about breaking barriers and showcasing the immense potential of women in motorsport. Formula E gave me the platform to make a statement , and I feel honored to be part of this journey towards gender equality in racing", said the Saudi driver, shortly after the achievement.
                    <br /><br />"Reem's milestone is a testament to what we stand for in Formula E: innovation, equality and competition. Her success is not just a victory for Formula E, but a leap forward for inclusivity in racing, and we all join her in celebrating this milestone, especially in the week of International Women's Day," said Jeff Dodds, CEO of Formula E.
                    <br /><br /><span><b>Check out the video:</b></span></p>
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