import React from 'react';
import { Link } from 'react-router-dom';
import './StreamSelection.css';

import heroImage from '../../assets/img/streaming1.png';

const StreamSelection = () => {
    const streams = [
        { id: 1, LinkStreaming: '/Stream/StreamFormulaE', title: 'Formula E', subtitle: 'Experience the excitement of live races! Oficial Live', imgUrl: 'https://nexo-uploads-beta.s3.amazonaws.com/wp-content/uploads/2023/11/29015402/EPS905_160157_X4I8367-1000x1000_binary_322325.jpg', imgProfile: 'https://i.redd.it/ot-new-logo-of-formula-e-with-previous-versions-in-the-last-v0-vqqgra64jn2a1.jpg?width=1023&format=pjpg&auto=webp&s=efac52d4930abe6a5561958a3b8243d6956838a9' },
        { id: 2, LinkStreaming: '/Stream/StreamPorsche', title: 'TAG Porsche', subtitle: 'Don’t miss the action and strategies in real-time!', imgUrl: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Motorsports/Formula-E/Round-9-Jakarta/Race/b-M22_2254_fine.jpg/jcr:content/b-M22_2254_fine.jpg', imgProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jW0FW5O4NdRBtwO0cE7zO_gx9kZ80hU88Q&s' },
        { id: 3, LinkStreaming: '/Stream/StreamMaserati', title: 'Maserati Racing', subtitle: 'Discover the team’s behind-the-scenes! Maserati', imgUrl: 'https://maserati.scene7.com/is/image/maserati/maserati/international/News/2023/formula-e/23260-Diriyah.jpg?$1400x2000$&fit=constrain', imgProfile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_wEacYwp7GJ9TRmdfv62yCrgyUn6JMCSZg&s' },
        { id: 4, LinkStreaming: '/Stream/StreamVitor', title: 'Vitor Eskes', subtitle: 'Join us for a live broadcast full of excitement and race analysis!', imgUrl: 'https://www.webmotors.com.br/wp-content/uploads/2021/04/26124504/GPF3-1-1024x576-1.jpg', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/429559233_441751231759071_3747053932304203203_n.jpg?ccb=11-4&oh=01_Q5AaIAO5-8U4yFNhddGhFp6XdzKdpvk89J5gjd8mBUdeqvrF&oe=670576F3&_nc_sid=5e03e0&_nc_cat=105' },
        { id: 5, LinkStreaming:'/Stream/StreamGabriel', title: 'Gabriel Matias', subtitle: 'Tune in for in-depth discussions about the season, drivers, and much more!', imgUrl: 'https://images.unsplash.com/photo-1699138346485-94ade0a398d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/431692287_8088804247838985_6679869870596023845_n.jpg?ccb=11-4&oh=01_Q5AaIK596Up9g6oSlriU0iyeE_UjBaESfZ2ZCFsOcNfWhoMw&oe=67058135&_nc_sid=5e03e0&_nc_cat=108' },
        { id: 6, LinkStreaming:'/Stream/StreamNathan', title: 'Nathan Craveiro', subtitle: 'Come watch with me and relive the best moments from the last Formula E race!', imgUrl: 'https://f.i.uol.com.br/fotografia/2023/03/25/1679764884641f2d94786b2_1679764884_3x2_md.jpg', imgProfile: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/419620001_1056766648838592_7540748293304127228_n.jpg?ccb=11-4&oh=01_Q5AaIBj9rmZ2c5ftw-L7jGCY2Rum-arplWPUeM3QaVohKSSJ&oe=6705713A&_nc_sid=5e03e0&_nc_cat=106' },
    ];

    return (
        <div className="mainStreamSelect">
            <div className="streaming-pageStreamSelect">
                {/* Hero Image and Info on the Right */}
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
                        <p className="highlight-subtitleStreamSelect">Live Formula E Mahindra! Join us to experience the adrenaline of races, exclusive interviews, and behind-the-scenes of the team. Don’t miss it!</p>
                    </div>
                </div>

                {/* Streaming Grid */}
                <div className="streaming-gridStreamSelect">
                    {streams.map((stream) => (
                        <Link to={stream.LinkStreaming} className='linkStream' key={stream.id}>
                            <div className="streaming-boxStreamSelect">
                                <img
                                    src={stream.imgUrl}
                                    alt={`Streaming of ${stream.title}`}
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default StreamSelection;