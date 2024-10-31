import React, { useRef, useState, useEffect } from 'react';
import { Camera, Video, Tv2, PlaySquare, StopCircle, Upload } from 'lucide-react';
import './MakeStream.css';

const MakeStream = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const [isPreviewing, setIsPreviewing] = useState(false);
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [streamImage, setStreamImage] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const previewRef = useRef(null);
    const streamRef = useRef(null);
    const fileInputRef = useRef(null);

    const startPreview = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: true
            });
            if (previewRef.current) {
                previewRef.current.srcObject = stream;
                setIsPreviewing(true);
                setError('');
            }
        } catch (err) {
            setError('Erro ao acessar a câmera: ' + err.message);
        }
    };

    const stopPreview = () => {
        if (previewRef.current && previewRef.current.srcObject) {
            const tracks = previewRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            previewRef.current.srcObject = null;
            setIsPreviewing(false);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setStreamImage(imageUrl);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const stopStreaming = () => {
        if (streamImage) {
            URL.revokeObjectURL(streamImage);
            setStreamImage(null);
        }
        setIsStreaming(false);
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(cat => cat !== category)
                : [...prev, category]
        );
    };

    const startStream = () => {
        if (!title) {
            setError('Por favor, adicione um título para a transmissão');
            return;
        }
        if (!streamImage) {
            setError('Por favor, selecione uma imagem para a transmissão');
            return;
        }
        if (selectedCategories.length === 0) {
            setError('Por favor, selecione pelo menos uma categoria');
            return;
        }
        setIsStreaming(true);
        setError('');
    };

    useEffect(() => {
        return () => {
            stopPreview();
            if (streamImage) {
                URL.revokeObjectURL(streamImage);
            }
        };
    }, []);

    const categories = [
        "Ação", "Drama", "Comédia", "Documentário", "Esportes"
    ];

    return (
        <div className="app-container MKSTREAM">
            <header className="header MKSTREAM">
                <div className="input-container MKSTREAM">
                    <input
                        type="text"
                        placeholder="Digite o título da sua transmissão"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="title-input MKSTREAM"
                    />
                    <input
                        type="text"
                        placeholder="Digite uma descrição para sua transmissão"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="subtitle-input MKSTREAM"
                    />
                </div>
                {title && <h1 className="main-title MKSTREAM">{title}</h1>}
                {subtitle && <p className="main-subtitle MKSTREAM">{subtitle}</p>}
            </header>

            <div className="stream-container MKSTREAM">
                <div className="stream-card MKSTREAM">
                    <div className="card-header MKSTREAM">
                        <Camera size={24} className="icon MKSTREAM" />
                        <h2>Preview da Câmera</h2>
                    </div>
                    <div className="card-content MKSTREAM">
                        <div className="video-container MKSTREAM">
                            {isPreviewing ? (
                                <video
                                    ref={previewRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className="video-element MKSTREAM"
                                />
                            ) : (
                                <div className="video-placeholder MKSTREAM">
                                    <Camera size={48} />
                                    <p>Clique em Iniciar Preview para ativar a câmera</p>
                                </div>
                            )}
                        </div>
                        <button
                            className={`stream-button ${isPreviewing ? 'stop' : 'start'} MKSTREAM`}
                            onClick={isPreviewing ? stopPreview : startPreview}
                        >
                            {isPreviewing ? (
                                <><StopCircle size={20} /> Parar Preview</>
                            ) : (
                                <><PlaySquare size={20} /> Iniciar Preview</>
                            )}
                        </button>
                    </div>
                </div>

                <div className="stream-card MKSTREAM">
                    <div className="card-header MKSTREAM">
                        <Tv2 size={24} className="icon MKSTREAM" />
                        <h2>Streaming ao Vivo</h2>
                    </div>
                    <div className="card-content MKSTREAM">
                        <div 
                            className="video-container MKSTREAM"
                            onClick={!isStreaming ? handleImageClick : undefined}
                            style={{ cursor: !isStreaming ? 'pointer' : 'default' }}
                        >
                            {streamImage ? (
                                <img 
                                    src={streamImage} 
                                    alt="Stream preview" 
                                    className="video-element MKSTREAM"
                                />
                            ) : (
                                <div className="video-placeholder MKSTREAM">
                                    <Upload size={48} />
                                    <p>Clique para escolher uma imagem para o stream</p>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="file-input MKSTREAM"
                            />
                        </div>
                        <div className="button-container MKSTREAM">
                            {streamImage && (
                                <button
                                    className="stream-button stop MKSTREAM"
                                    onClick={stopStreaming}
                                >
                                    <StopCircle size={20} /> Remover Imagem
                                </button>
                            )}
                            <button
                                className={`stream-button start MKSTREAM ${(!title || !streamImage || selectedCategories.length === 0) ? 'disabled' : ''}`}
                                onClick={startStream}
                                disabled={!title || !streamImage || selectedCategories.length === 0}
                            >
                                <PlaySquare size={20} /> Iniciar Stream
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="categories-card MKSTREAM">
                <h2>Categorias</h2>
                <div className="categories-list MKSTREAM">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-button MKSTREAM ${selectedCategories.includes(category) ? 'selected' : ''}`}
                            onClick={() => toggleCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {error && (
                <div className="error-message MKSTREAM">
                    {error}
                </div>
            )}
        </div>
    );
};

export default MakeStream;