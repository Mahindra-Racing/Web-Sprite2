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
import './PilotoEquipe.css';

const PilotoEquipe = () => {
    return (
        <main>
            <div id="section2">
                <div className="containerProdutoPE">
                    <div className="product-headerPE">
                        <h1 className="product-tituloPE">PILOTOS E EQUIPES DE 2024</h1>
                    </div>
                    <hr className="hr2" />
                    <div className="product-containerPE">
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/6c47b61a-5bb4-4ae4-9e0a-63a411de0782.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <p></p>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0a33d76e-64e6-4823-b70b-27b79a48679c.png' alt="Imagem menor" />
                            </div>
                        </div>
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src="//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/3f4d9ccc-0453-410c-8542-225bd2ebf280.png" alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <p></p>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src="//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/e05ede6d-d065-497b-a298-85afeeeb2ab1.png" alt="Imagem menor" />
                            </div>
                        </div>
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src="//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/3d5b4033-31b9-442b-a0b5-183d51ebde5e.png" alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <p></p>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src="//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/e05ede6d-d065-497b-a298-85afeeeb2ab1.png" alt="Imagem menor" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PilotoEquipe;