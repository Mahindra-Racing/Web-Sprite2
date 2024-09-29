import React from 'react';
import { Link } from 'react-router-dom';
import './StreamSelection.css';

import heroImage from '../../assets/img/streaming1.png';

const StreamSelection = () => {
    const streams = [
        { id: 1, title: 'Formula-E', subtitle: 'Acompanhe as emoções das corridas ao vivo!', imgUrl: 'https://nexo-uploads-beta.s3.amazonaws.com/wp-content/uploads/2023/11/29015402/EPS905_160157_X4I8367-1000x1000_binary_322325.jpg', imgProfile: 'https://i.redd.it/ot-new-logo-of-formula-e-with-previous-versions-in-the-last-v0-vqqgra64jn2a1.jpg?width=1023&format=pjpg&auto=webp&s=efac52d4930abe6a5561958a3b8243d6956838a9', },
        { id: 2, title: 'TAG Porsche', subtitle: 'Não perca a ação e as estratégias em tempo real!', imgUrl: 'https://www.nissan-cdn.net/content/dam/Nissan/br/FormulaE/header-desktop.jpg', imgProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jW0FW5O4NdRBtwO0cE7zO_gx9kZ80hU88Q&s' },
        { id: 3, title: 'Maserati Racing', subtitle: 'Sinta a adrenalina e descubra os bastidores da equipe!', imgUrl: 'https://static.independent.co.uk/2023/01/09/15/Andre%20Lotterer%20%28Avalanche%20Andretti%29.jpg', imgProfile: 'https://scontent.fcgh11-1.fna.fbcdn.net/v/t39.30808-1/387872224_891699219084599_5297368716210760592_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=xYh_VZFopJsQ7kNvgF8F8sf&_nc_ht=scontent.fcgh11-1.fna&_nc_gid=A60kZCsy41VeUndhygb2VyF&oh=00_AYA2PavshhfZalDqg3HuCb4qYjE1qYCVz5sQ7PrW3SWqtA&oe=66FE47BC' },
        { id: 4, title: 'Vitor Eskes', subtitle: 'Junte-se a nós para uma transmissão ao vivo cheia de emoção e análises das corridas!', imgUrl: 'https://www.webmotors.com.br/wp-content/uploads/2021/04/26124504/GPF3-1-1024x576-1.jpg', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/429559233_441751231759071_3747053932304203203_n.jpg?ccb=11-4&oh=01_Q5AaIAO5-8U4yFNhddGhFp6XdzKdpvk89J5gjd8mBUdeqvrF&oe=670576F3&_nc_sid=5e03e0&_nc_cat=105' },
        { id: 5, title: 'Gabriel Matias', subtitle: 'Sintonize para discussões aprofundadas sobre a temporada, pilotos e muito mais!', imgUrl: 'https://images.unsplash.com/photo-1699138346485-94ade0a398d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/431692287_8088804247838985_6679869870596023845_n.jpg?ccb=11-4&oh=01_Q5AaIK596Up9g6oSlriU0iyeE_UjBaESfZ2ZCFsOcNfWhoMw&oe=67058135&_nc_sid=5e03e0&_nc_cat=108' },
        { id: 6, title: 'Nathan Craveiro', subtitle: 'Venha assistir comigo e reviver os melhores momentos da última corrida da Fórmula E!', imgUrl: 'https://f.i.uol.com.br/fotografia/2023/03/25/1679764884641f2d94786b2_1679764884_3x2_md.jpg', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/419620001_1056766648838592_7540748293304127228_n.jpg?ccb=11-4&oh=01_Q5AaIBj9rmZ2c5ftw-L7jGCY2Rum-arplWPUeM3QaVohKSSJ&oe=6705713A&_nc_sid=5e03e0&_nc_cat=106' },
    ];

    return (
        <div className="mainStreamSelect">
            <div className="streaming-pageStreamSelect">
                {/* Hero Image e Info à Direita */}
                <div className="highlight-containerStreamSelect">
                    <div className="hero-containerStreamSelect">
                        <Link to='/Stream/StreamMahindra' className='linkStream'>
                            <img src={heroImage} alt="Hero" className="hero-imageStreamSelect" />
                        </Link>
                    </div>

                    <div className="highlight-infoStreamSelect">
                        <Link to='/Stream/StreamMahindra' className='linkStream'>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeeko32Id8MJoTf6H2E3ISSD_v96tVr8AOA&s"
                                alt="Profile"
                                className="highlight-profile-imageStreamSelect"
                            />
                        </Link>
                        <Link to='/Stream/StreamMahindra' className='linkStream'>
                            <h2 className="highlight-titleStreamSelect">Mahindra Racing</h2>
                        </Link>
                        <p className="highlight-subtitleStreamSelect">Live Fórmula E Mahindra! Junte-se a nós para acompanhar a adrenalina das corridas, entrevistas exclusivas e os bastidores da equipe. Não perca!</p>
                    </div>
                </div>

                {/* Grid de Transmissões */}
                <div className="streaming-gridStreamSelect">
                    {streams.map((stream) => (
                        <div key={stream.id} className="streaming-boxStreamSelect">
                            <img
                                src={stream.imgUrl}
                                alt={`Streaming de ${stream.title}`}
                                className="streaming-imageStreamSelect"
                            />
                            <div className="streaming-infoStreamSelect">
                                <img
                                    src={stream.imgProfile}
                                    alt="Profile"
                                    className="info-imageStreamSelect"
                                />
                                <div className="streaming-info-textStreamSelect">
                                    <h2>{stream.title}</h2>
                                    <p>{stream.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StreamSelection;