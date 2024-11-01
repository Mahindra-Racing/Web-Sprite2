import React, { useState } from 'react';
import Chat from '../Chat';
import './StreamMaserati.css';

import streaming1 from '../../../assets/img/streaming1.png'
import { Link } from 'react-router-dom';

const StreamingPage = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'User',
        image: 'https://via.placeholder.com/80',
    });

    const [showProfileEdit, setShowProfileEdit] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

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
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/429559233_441751231759071_3747053932304203203_n.jpg?ccb=11-4&oh=01_Q5AaINBtI7mKS2PRLMSD3XVXTfKCOgzzXn0RXaYOwJQSIUii&oe=6730F873&_nc_sid=5e03e0&_nc_cat=105',
            viewerCount: '3.456 ',
            viewerCountAbrev: ' 3,4 mil'
        },
        {   
            LinkTop: '/Stream/StreamGabriel',
            title: 'Gabriel Matias',
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/431692287_8088804247838985_6679869870596023845_n.jpg?ccb=11-4&oh=01_Q5AaIL0LIJ98YzZFzeZy0aDX4sykqWpPtb5lvjch_rSYwLMe&oe=672BF4F5&_nc_sid=5e03e0&_nc_cat=108',
            viewerCount: '2.345',
            viewerCountAbrev: ' 2,3 mil'
        },
        {
            LinkTop: '/Stream/StreamNathan',
            title: 'Nathan Craveiro',
            image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/419620001_1056766648838592_7540748293304127228_n.jpg?ccb=11-4&oh=01_Q5AaIPSp_w0-IW4O9zBzWorzP7onVUDTcillFXql6WXJhEmh&oe=672BE4FA&_nc_sid=5e03e0&_nc_cat=106',
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
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(170, 0, 0, 0.603)"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                            <p> {container.viewerCountAbrev}</p>
                                        </div>
                                    </div>
                                </div></Link>
                        ))}
                    </div>

                    <div className="main-content">
                        <div className="streaming-box">
                            <img
                                src="https://maserati.scene7.com/is/image/maserati/maserati/international/News/2023/formula-e/23260-Diriyah.jpg?$1400x2000$&fit=constrain"
                                alt="Live Streaming"
                                className="streaming-image"
                            />
                            <div className="streaming-info">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_wEacYwp7GJ9TRmdfv62yCrgyUn6JMCSZg&s" alt="Streaming Info" className="info-image" />
                                <div className="streaming-info-text">
                                    <h2>Maserati Racing</h2>
                                    <p>São Paulo E-Prix </p>
                                    <div className='streaming-into-btn'>
                                        <button className='into-btn'>Sports</button>
                                        <button className='into-btn'>English</button>
                                        <button className='into-btn'>Brazil</button>
                                    </div>
                                </div>
                                <div className="streaming-actions">
                                    <div className="viewer-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(170, 0, 0, 0.603)"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                        <span style={{ marginRight: '8px' }} className="viewer-text">{containers[1].viewerCount}</span>
                                    </div>
                                    <button className="support-button" onClick={handleModalOpen}>Super-E</button>
                                </div>
                            </div>
                        </div>

                        <div className="chat-box">
                            <Chat userProfile={userProfile} />
                        </div>
                    </div>
                </div>
                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay" onClick={handleModalClose}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={handleModalClose}>X</button>
                            <div className="modal-header">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_wEacYwp7GJ9TRmdfv62yCrgyUn6JMCSZg&s' alt="User Profile" className="modal-profile-image" />
                                <div>
                                    <h3>Maserati Racing</h3>
                                    <p>Running towards a sustainable future!</p>
                                </div>
                            </div>
                            <div className="modal-body">
                                <p className='modal-descricao-STEAM'>Get Super-E and watch ad-free broadcasts for an uninterrupted experience. With your purchase, you also directly support your favorite team or streamer!</p>
                                <p className='modal-title-STEAM'>A Thank You Gift:</p>
                                <p className='modal-second-title-STEAM'><span className='modal-second-title-span-STEAM'>Subscriber badges</span> para usar no chat e mostrar que você faz parte dessa comunidade</p>
                                <img src="https://i.redd.it/osrbg0gex4i71.png" alt="Gift Image" className="gift-image" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_wEacYwp7GJ9TRmdfv62yCrgyUn6JMCSZg&s" alt="Gift Image" className="gift-image" />
                                <button className="modal-action-button">Super-E</button><button className='modal-action-button-span'>$ 9.90</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default StreamingPage;
