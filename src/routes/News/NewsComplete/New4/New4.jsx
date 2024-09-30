import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../../assets/img/banner1.png"
import banner2 from "../../../../assets/img/banner3.png"
import img1 from "../../../../assets/img/carro1.png"
import img2 from "../../../../assets/img/img2.png"
import img4 from "../../../../assets/img/img5.png"
import new1 from "../../../../assets/img/new1.png"
import new3 from "../../../../assets/img/new3.png"
import "./New4.css";

const Home = () => {
    return (
        <main>
            <div id="section2">
                <div className="descricao-news2">
                    <h1 className="descricao-titulo2">Maloney announced as Di Grassi's teammate at Abt/Lola/Yamaha</h1>
                    <p className="descricao-paragrafo2">Zane Maloney will make his Formula E debut later this year, having joined the Abt/Lola/Yamaha team ahead of the upcoming 2024/2025 season.</p>
                    <p className="descricao-data2">Sep 23, 2024</p>
                </div>
                <div className="main-container3">
                    <div className="carousel3">
                        <div className="carousel-container3">
                            <div className="carousel-item3">
                                <img src='https://cdn-1.motorsport.com/images/amp/6zQ5JPwY/s1000/zane-maloney-abt-lola-formula-.jpg' alt="Imagem1" title="Imagem1" />
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
                    <p>Maloney, who also became Sauber 's Formula 1 reserve driver this year and will become the first Barbadian driver to race in Formula E, was previously a test and reserve driver for Andretti for the past two seasons.
                        <br /><br />
                        During that time, Maloney has taken part in a number of rookie test sessions, including in Berlin, Rome and Misano, and has already sampled the new Gen3 Evo machine, as well as the first powertrain created by the new collaboration between Lola and Yamaha.
                        <br /><br />
                        “I’m really looking forward to the challenge, it’s a great opportunity to join Abt, Lola and Yamaha on this new journey for them,” Maloney told Motorsport.com.
                        <br /><br />
                        "It's a huge step in my career to be employed by such an incredible group of people.
                        <br /><br />
                        "We have no expectations about where we'll be now, it's reduced pressure and just trying to get better every day."
                        <br /><br />
                        Maloney currently sits third in the F2 standings, having won both the sprint and main races at the opening Bahrain event for Rodin Motorsport, but will now miss the final two rounds in Qatar and Abu Dhabi due to his new Formula E commitments.</p>
                </div>

                <div className="img-news">
                    <img src='//cdn.motorsport.com/images/mgl/0a9kKv40/s1000/zane-maloney-abt-lola-formula-.jpg' alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>He replaces Nico Muller at Abt after the Swiss driver moved to Andretti, with Maloney partnered by Lucas di Grassi.
                        <br /><br />
                        “We are very excited to have Zane as part of the team in Season 11, and he has already brought a breath of fresh air during our first few days working together,” added Abt CEO Thomas Biermaier.
                        <br /><br />
                        “Giving young talent a chance and supporting them has been a strong tradition at ABT for many decades and that’s why it was clear to us that we would also follow this path in Formula E.”
                        <br /><br />
                        This season will mark the first for the new partnership between Abt, Lola and Yamaha, with di Grassi having been “very positively surprised” by the team’s progress so far.
                        <br /><br />
                        Maloney admits that the chance to team up with prestigious brands early on in the journey was an incentive to join the project.
                        <br /><br />
                        “I see it as an opportunity, it’s exciting, of course,” he said.
                        <br /><br />
                        “If I was 35, I would probably think a little differently about it, but I am young and I am ready to take on this challenge of developing the team with incredible engineers and Lucas, who is much more experienced, to learn from him as well.
                        <br /><br />
                        “I’m looking forward to it, we don’t know where we’ll be but I’m optimistic and I know everyone in the team is very motivated to get to the front of the grid.</p>
                </div>

                <div className="img-news">
                    <img src='//cdn.motorsport.com/images/mgl/YKEMnK10/s1000/zane-maloney-andretti-global.jpg' alt="imagem 2" />
                </div>

                <div className="text-news">
                    <p>“How fast that is, I don’t know, but I know they’re doing the best job they can to prepare and prepare me for this season.”
                        <br /><br />
                        The announcement on Wednesday means Maloney is currently the only driver on the grid without a Formula E start.
                        <br /><br />
                        ERT is the only team yet to confirm its driver line-up, having raced with Dan Ticktum and Sergio Sette Camara last season.
                    </p>
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