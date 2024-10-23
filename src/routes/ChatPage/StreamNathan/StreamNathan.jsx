import React, { useState } from 'react';
import Chat from '../Chat';
import './StreamNathan.css';

import { Link } from 'react-router-dom';

const StreamingPage = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'User',
        image: 'https://via.placeholder.com/80',
    });

    const [showProfileEdit, setShowProfileEdit] = useState(false);
    
    // Definição individual dos containers
    const containers = [
        {   
            LinkTop: '/Stream/StreamFormulaE',
            title: 'Formula-E',
            image: 'https://i.redd.it/ot-new-logo-of-formula-e-with-previous-versions-in-the-last-v0-vqqgra64jn2a1.jpg?width=1023&format=pjpg&auto=webp&s=efac52d4930abe6a5561958a3b8243d6956838a9',
            viewerCount: ' 7.890',
            viewerCountAbrev: ' 7,8 mil'
        },
        {
            LinkTop: '/Stream/StreamMahindra',
            title: 'Mahindra Racing',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeeko32Id8MJoTf6H2E3ISSD_v96tVr8AOA&s',
            viewerCount: '6.789',
            viewerCountAbrev: ' 6,7 mil'
        },
        {   
            LinkTop: '/Stream/StreamPorsche',
            title: 'TAG Porsche',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jW0FW5O4NdRBtwO0cE7zO_gx9kZ80hU88Q&s',
            viewerCount: '5.678 ',
            viewerCountAbrev: ' 5,6 mil'
        },
        {   
            LinkTop: '/Stream/StreamMaserati',
            title: 'Maserati Racing',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_wEacYwp7GJ9TRmdfv62yCrgyUn6JMCSZg&s',
            viewerCount: '4.567',
            viewerCountAbrev: ' 4,5 mil'
        },
        {
            LinkTop: '/Stream/StreamVitor',
            title: 'Vitor Eskes',
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/429559233_441751231759071_3747053932304203203_n.jpg?ccb=11-4&oh=01_Q5AaIAO5-8U4yFNhddGhFp6XdzKdpvk89J5gjd8mBUdeqvrF&oe=670576F3&_nc_sid=5e03e0&_nc_cat=105',
            viewerCount: '3.456 ',
            viewerCountAbrev: ' 3,4 mil'
        },
        {   
            LinkTop: '/Stream/StreamGabriel',
            title: 'Gabriel Matias',
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/431692287_8088804247838985_6679869870596023845_n.jpg?ccb=11-4&oh=01_Q5AaIK596Up9g6oSlriU0iyeE_UjBaESfZ2ZCFsOcNfWhoMw&oe=67058135&_nc_sid=5e03e0&_nc_cat=108',
            viewerCount: '2.345',
            viewerCountAbrev: ' 2,3 mil'
        },
        {
            LinkTop: '/Stream/StreamNathan',
            title: 'Nathan Craveiro',
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/419620001_1056766648838592_7540748293304127228_n.jpg?ccb=11-4&oh=01_Q5AaIBj9rmZ2c5ftw-L7jGCY2Rum-arplWPUeM3QaVohKSSJ&oe=6705713A&_nc_sid=5e03e0&_nc_cat=106',
            viewerCount: '1.234',
            viewerCountAbrev: ' 1,2 mil'
        },
        
       
    ];

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUserProfile((prevProfile) => ({
                ...prevProfile,
                image: reader.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <main className='mainSTREAM'>
            <section className='section2'>
                <div className="streaming-page">
              <div className="top-bar">
                        {containers.map((container, index) => (
                            <Link to={container.LinkTop} className='LinkStream'>
                                <div key={index} className="top-container">
                                    <img
                                        src={container.image}
                                        alt="Container"
                                        className="top-container-image"
                                    />
                                
                                    <div class="top-container-info">
                                        <h3>{container.title}</h3>
                                        <div class="info-description">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(170, 0, 0, 0.603)"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                            <p> {container.viewerCountAbrev}</p>
                                        </div>
                                    </div>
                                </div></Link>
                        ))}
                    </div>

                    <div className="main-content">
                        <div className="streaming-box">
                            <img
                                src="https://f.i.uol.com.br/fotografia/2023/03/25/1679764884641f2d94786b2_1679764884_3x2_md.jpg"
                                alt="Live Streaming"
                                className="streaming-image"
                            />
                            <div className="streaming-info">
                                <img src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/419620001_1056766648838592_7540748293304127228_n.jpg?ccb=11-4&oh=01_Q5AaIBj9rmZ2c5ftw-L7jGCY2Rum-arplWPUeM3QaVohKSSJ&oe=6705713A&_nc_sid=5e03e0&_nc_cat=106" alt="Streaming Info" className="info-image" />
                                <div className="streaming-info-text">
                                    <h2>Nathan Craveiro</h2>
                                    <p>Venha assistir comigo e reviver os melhores momentos da última corrida da Fórmula E!</p>
                                    <div className='streaming-into-btn'>
                                        <button className='into-btn'>Sports</button>
                                        <button className='into-btn'>English</button>
                                        <button className='into-btn'>Brazil</button>
                                        <button className='into-btn'>Rerun</button>
                                    </div>
                                </div>
                                <div className="streaming-actions">
                                    
                                    <div className="viewer-count">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(170, 0, 0, 0.603)"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                        <span style={{ marginRight: '8px' }} className='viewer-text'>{containers[6].viewerCount}</span>
                        
                                    </div>
                                    <button className="support-button">
                                        E-Chat
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="chat-box">
                            <Chat userProfile={userProfile} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StreamingPage;
