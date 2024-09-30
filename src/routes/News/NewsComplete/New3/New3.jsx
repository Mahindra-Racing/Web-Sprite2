import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/img/banner1.png"
import new2 from "../../../../assets/img/new2.png";
import banner2 from "../../../../assets/img/banner3.png"
import img1 from "../../../../assets/img/carro1.png"
import img4 from "../../../../assets/img/img5.png"
import new1 from "../../../../assets/img/new1.png"
import new3 from "../../../../assets/img/new3.png"
import "./New3.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">"He continues to bring in money"</h1>
                    <p className="descricao-paragrafo2">Formula E driver  Mitch Evans has argued that Sergio Perez remains a source of money for Red Bull and that this would be the reason why the team keeps him in the seat alongside Max Verstappen.</p>
                    <p className="descricao-data2">Aug 16, 2024</p>
                </div>
                <div className="main-container3">
                    <div className="carousel3">
                        <div className="carousel-container3">
                            <div className="carousel-item3">
                                <img src={new2} alt="Imagem1" title="Imagem1" />
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
                    <p>Speaking to  Total Motorsport , the FE runner-up said that new talents have no chance of reaching  Formula 1 because they do not have the support of big sponsors and do not want to do the job of reserve driver.
                        <br /><br />
                        Evans decided to switch from F1 to FE at the age of 22 and will continue there, as the doors to the highest category of motorsport never really opened for him. Mitch points out that the financial issue is one of the reasons for this.
                        <br /><br />
                        "A lot of those who have the opportunity bring money. Look at Sergio Perez , he keeps bringing money to Red Bull and you can't compete against that. He's not a bad driver but you can't compete against him [Verstappen]. It's difficult to go against a driver who has a seat on merit."
                        <br /><br />
                        "A lot of ex-F1 drivers came to FE and had a reality check," says the competitor.
                        <br /><br />
                        "It was difficult to get a seat test. In the simulators, I was faster than the official drivers, but that was of no use. Something very unexpected has to happen, even to be a reserve driver there are people who use the money, it's ridiculous."</p>
                </div>

                <div className="img-news">
                    <img src="//cdn.motorsport.com/images/mgl/Y99DNLPY/s1000/oliver-bearman-haas-f1-team-da.jpg" alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>Evans also revealed that he believes the best way to reach F1 would be to work as a reserve driver, as was the case with Oliver Bearman and Nyck De Vries .
                        <br /><br />
                        "Look at Bearman. This guy is good, but the week before he qualified 18th in Bahrain and then got a chance with Ferrari [in Jeddah]. He did a decent job in one of the best cars on the grid and got a seat for it."
                        <br /><br />
                        "It's all about perspective, but teams are no longer taking risks with drivers. The only option to get there is to get a crazy racing opportunity."
                        <br /><br />
                        Bearman replaced Carlos Sainz during the Jeddah round after the works driver had to undergo emergency appendix surgery in 2024. In the case of De Vries , he replaced Alexander Albon for the same reason in the 2022 Italian GP at Williams.
                        <br /><br />
                        "Look at Nyck De Vries, he didn't have a chance in F1, but he had the chance in Monza when Albon got sick and suddenly it's the best thing he's done, but he's still the same driver as before."</p>
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