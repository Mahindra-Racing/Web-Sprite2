import React from "react";
import './PilotoEquipe.css';

const PilotoEquipe = () => {
    return (
        <main className="mainPE">
            <div id="section2">
                <div className="containerProdutoPE">
                    <div className="product-headerPE">
                        <h1 className="product-tituloPE">
                            {/* Adiciona a imagem SVG ao lado esquerdo do título */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#4274ff"><path d="M480-480Zm80 240q100 0 170-70t70-170q0-101-73.5-170.5T550-720q-48 0-93 11t-87 33l100 40q41 17 65.5 52.5T560-504q0 60-41.5 102T418-360H162q-2 24-2 54.5v65.5h400ZM176-440h240q27 0 45.5-18.5T480-504q0-19-10.5-34.5T440-562l-148-60q-42 37-71.5 84T176-440Zm384 280H160q-33 0-56.5-23.5T80-240v-90q0-98 37-183.5t100.5-149Q281-726 367-763t183-37q68 0 128 25t105 68.5Q828-663 854-605t26 125q0 66-25 124.5t-68.5 102Q743-210 684.5-185T560-160Z" /></svg>
                            DRIVERS / TEAMS
                        </h1>
                    </div>

                    <hr className="hr2" />
                    <div className="product-containerPE">
                        {/* JAKE DENNIS - ANDRETTI*/}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/6c47b61a-5bb4-4ae4-9e0a-63a411de0782.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">JAKE</p>
                                            <p className="piloto-sobrenome">DENNIS</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://andrettiglobal.com/wp-content/uploads/2023/11/AG_FE_PrimaryLogo_Blk.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0a33d76e-64e6-4823-b70b-27b79a48679c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* NORMAN NATO - ANDRETTI*/}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/ef604bcc-19fe-4463-9667-97933cbf0065.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">NORMAN</p>
                                            <p className="piloto-sobrenome">NATO</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://andrettiglobal.com/wp-content/uploads/2023/11/AG_FE_PrimaryLogo_Blk.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0a33d76e-64e6-4823-b70b-27b79a48679c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* STOFFEL VANDOORNE */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/3f4d9ccc-0453-410c-8542-225bd2ebf280.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">STOFFEL</p>
                                            <p className="piloto-sobrenome">VANDOORNE</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/e05ede6d-d065-497b-a298-85afeeeb2ab1.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* JEAN-ÉRIC VERGNE */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/3d5b4033-31b9-442b-a0b5-183d51ebde5e.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">JEAN-ÉRIC</p>
                                            <p className="piloto-sobrenome">VERGNE</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/e05ede6d-d065-497b-a298-85afeeeb2ab1.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* MAXIMILIAN GÜNTHER */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/a4aa14e5-3812-425a-a4b6-310b4ad7023c.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">MAXIMILIAN</p>
                                            <p className="piloto-sobrenome">GÜNTHER</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw7b9208e4/LogosTeams/LogoMaserati23.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/19821c93-f115-41fb-af4f-80831a91afef.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* JEHAN DARUVALA */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/318cdf28-d80e-41de-b7fc-d4584f7d6117.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">JEHAN</p>
                                            <p className="piloto-sobrenome">DARUVALA</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw7b9208e4/LogosTeams/LogoMaserati23.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/19821c93-f115-41fb-af4f-80831a91afef.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* NYCK DE VRIES */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/8bd68290-c0ad-43b6-a1ce-ee162b7d8914.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">NYCK</p>
                                            <p className="piloto-sobrenome">DE VRIES</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw8427c471/LogosTeams/LogoMahindra2.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* EDOARDO MORTARA */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">EDOARDO</p>
                                            <p className="piloto-sobrenome">MORTARA</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw8427c471/LogosTeams/LogoMahindra2.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* JORDAN KING */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/a5448f8d-b112-439d-b68e-c1349be4b945.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">JORDAN</p>
                                            <p className="piloto-sobrenome">KING</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw8427c471/LogosTeams/LogoMahindra2.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* LUCAS DE GRASSI */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png' alt="Imagem Piloto" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">LUCAS</p>
                                            <p className="piloto-sobrenome">DE GRASSI</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/pt/a/a1/Logotipo_da_ABT_CUPRA_Formula_E_Team.png' alt="Pequena imagem do time" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c57e46c4-8163-44f6-9c0d-b74579d51000.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* NICO MÜLLER */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/d8e6e6f6-4bce-4848-860b-8d88383983d1.png' alt="Imagem Piloto" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">NICO</p>
                                            <p className="piloto-sobrenome">MÜLLER</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/pt/a/a1/Logotipo_da_ABT_CUPRA_Formula_E_Team.png' alt="Pequena imagem do time" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c57e46c4-8163-44f6-9c0d-b74579d51000.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* PASCAL WEHRLEIN */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4b62fd44-831d-4b01-9f11-2aaf2c47075c.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">PASCAL</p>
                                            <p className="piloto-sobrenome">WEHRLEIN</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://assets.motorsportstats.com/team/logo/FormulaE_Team_TAGHeuerPorscheFormulaETeam.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/feb6762c-ae66-4c8e-a892-f958d6f7e774.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* ANTÓNIO FÉLIX DA COSTA */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/fcc99980-3e5d-4a96-856a-8773641ceebe.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">ANTÓNIO FÉLIX</p>
                                            <p className="piloto-sobrenome">DA COSTA</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://assets.motorsportstats.com/team/logo/FormulaE_Team_TAGHeuerPorscheFormulaETeam.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/feb6762c-ae66-4c8e-a892-f958d6f7e774.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* Mitch Evans */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/2543b91c-2543-4835-b9fc-17b5fbc79cb1.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">MITCH</p>
                                            <p className="piloto-sobrenome">EVANS</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/05dab754-2899-411b-9c4e-72311a36cc9c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* NICK CASSIDY */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/47579af2-ce5a-4ba9-800b-b6821ca934e3.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">NICK</p>
                                            <p className="piloto-sobrenome">CASSIDY</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/05dab754-2899-411b-9c4e-72311a36cc9c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* Sam Bird */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/dbd8e835-4091-4449-a94d-9dd5e064ac79.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">SAM</p>
                                            <p className="piloto-sobrenome">BIRD</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://queen-of-motorsport.com/img/logos/NEOMMclaren.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0176f3e2-1247-494d-9a8d-b0950437ee8f.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* JAKE HUGHES */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/2174278b-4213-4688-9f72-8e982bc87e8e.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">JAKE</p>
                                            <p className="piloto-sobrenome">HUGHES</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://queen-of-motorsport.com/img/logos/NEOMMclaren.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0176f3e2-1247-494d-9a8d-b0950437ee8f.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* ROBIN FRIJNS */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/ba3d3d66-41de-4b1e-bfd6-7f318b2ec2af.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">ROBIN</p>
                                            <p className="piloto-sobrenome">FRIJNS</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://seeklogo.com/images/E/envision-racing-formula-e-logo-5D59B99E28-seeklogo.com.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c63aedad-a141-4ebc-9794-41a37909ef0c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* SÉBASTIEN BUEMI */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/d001837f-806a-4ccf-adac-3f5dccee21ed.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">SÉBASTIEN</p>
                                            <p className="piloto-sobrenome">BUEMI</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://seeklogo.com/images/E/envision-racing-formula-e-logo-5D59B99E28-seeklogo.com.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c63aedad-a141-4ebc-9794-41a37909ef0c.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* SÉRGIO SETTE CÂMARA */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/b768b851-5611-40be-8687-a0974e3d2754.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">SÉRGIO</p>
                                            <p className="piloto-sobrenome">SETTE CÂMARA</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/en/1/14/ERT_Formula_E_logo.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/5ac8091a-b415-4abb-a7ef-fb5511e545d5.png' alt="Imagem carro" />
                            </div>
                        </div>
                        {/* DAN TICKTUM */}
                        <div className="productPE">
                            <div className="product-topPE">
                                <div className="product-image-large">
                                    <img src='//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/0bdc60a2-9884-45b3-848d-3ffecf12fd59.png' alt="Imagem grande" />
                                </div>
                                <div className="product-textPE">
                                    <div className="piloto-info">
                                        <div>
                                            <p className="piloto-nome">DAN</p>
                                            <p className="piloto-sobrenome">TICKTUM</p>
                                        </div>
                                        <img className="piloto-img-small" src='https://upload.wikimedia.org/wikipedia/en/1/14/ERT_Formula_E_logo.png' alt="Pequena imagem do piloto" />
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-small">
                                <img src='//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/5ac8091a-b415-4abb-a7ef-fb5511e545d5.png' alt="Imagem carro" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PilotoEquipe;
