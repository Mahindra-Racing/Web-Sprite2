import React, { useState, useEffect } from 'react'; 
import { Eye, EyeOff, Send, Award, HelpCircle } from 'lucide-react';
import './SilhouetteGame.css';

const silhouette = {
    name: 'MAXIMILIAN GÜNTHER',
    image: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/a4aa14e5-3812-425a-a4b6-310b4ad7023c.png',
    options: [
        { name: 'MAXIMILIAN GÜNTHER', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/a4aa14e5-3812-425a-a4b6-310b4ad7023c.png' },
        { name: 'JAKE DENNIS', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/6c47b61a-5bb4-4ae4-9e0a-63a411de0782.png' },
        { name: 'NORMAN NATO', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/ef604bcc-19fe-4463-9667-97933cbf0065.png' },
        { name: 'STOFFEL VANDOORNE', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/3f4d9ccc-0453-410c-8542-225bd2ebf280.png' },
        { name: 'JEAN-ÉRIC VERGNE', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/3d5b4033-31b9-442b-a0b5-183d51ebde5e.png' },
        { name: 'NICK CASSIDY', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/47579af2-ce5a-4ba9-800b-b6821ca934e3.png' },
        { name: 'MITCH EVANS', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/2543b91c-2543-4835-b9fc-17b5fbc79cb1.png' },
        { name: 'SAM BIRD', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/dbd8e835-4091-4449-a94d-9dd5e064ac79.png' },
        { name: 'JAKE HUGHES', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/2174278b-4213-4688-9f72-8e982bc87e8e.png' },
        { name: 'JEHAN DARUVALA', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/318cdf28-d80e-41de-b7fc-d4584f7d6117.png' },
        { name: 'NYCK DE VRIES', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/8bd68290-c0ad-43b6-a1ce-ee162b7d8914.png' },
        { name: 'EDOARDO MORTARA', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png' },
        { name: 'PASCAL WEHRLEIN', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4b62fd44-831d-4b01-9f11-2aaf2c47075c.png' },
        { name: 'ANTÓNIO FÉLIX DA COSTA', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/fcc99980-3e5d-4a96-856a-8773641ceebe.png' },
        { name: 'LUCAS DI GRASSI', thumbnail: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png' },
        { name: '', thumbnail: '' },
    ],
};

const SilhouetteGame = () => {
    const [guess, setGuess] = useState('');
    const [zoomLevel, setZoomLevel] = useState(2);
    const [isCorrect, setIsCorrect] = useState(false);
    const [guessedList, setGuessedList] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [attemptedAnimals, setAttemptedAnimals] = useState([]);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        if (isCorrect) {
            const timer = setTimeout(() => {
                setShowHint(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isCorrect]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setGuess(value);

        if (value && !isCorrect) {
            const filtered = silhouette.options.filter(option =>
                option.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    const handleGuess = (name) => {
        if (name.toLowerCase() === silhouette.name.toLowerCase()) {
            setIsCorrect(true);
            setZoomLevel(1);
            setGuessedList([...guessedList, name]);
            setInputDisabled(true);
        } else {
            if (!attemptedAnimals.includes(name)) {
                setAttemptedAnimals([...attemptedAnimals, name]);
            }
            setZoomLevel(prevZoom => Math.max(1, prevZoom - 0.1));
        }
        setFilteredOptions([]);
        setGuess('');
    };

    // Nova função para lidar com o envio da resposta
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && guess && silhouette.options.some(option => option.name.toLowerCase() === guess.toLowerCase())) {
            handleGuess(guess);
        }
    };

    const resetGame = () => {
        setGuess('');
        setZoomLevel(2);
        setIsCorrect(false);
        setGuessedList([]);
        setFilteredOptions([]);
        setAttemptedAnimals([]);
        setInputDisabled(false);
        setShowHint(false);
    };

    return (
        <div className="page-containerSIL">
            <header className="headerSIL">
                <h1 className="main-titleSIL">Jogo da Silhueta</h1>
            </header>
            <div className="content-containerSIL">
                <div className="game-containerSIL">
                    <h2 className="game-titleSIL">Adivinhe o Piloto</h2>

                    <div className="image-wrapperSIL">
                        <div
                            className="image-containerSIL"
                            style={{ transform: `scale(${zoomLevel})` }}
                        >
                            <img
                                src={silhouette.image}
                                alt="Silhueta"
                                className={`silhouette-imageSIL ${isCorrect ? 'show-fullSIL' : ''}`}
                            />
                        </div>
                    </div>

                    <div className="autocomplete-containerSIL">
                        <input
                            type="text"
                            value={guess}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Digite o nome do animal..."
                            className="guess-inputSIL"
                            disabled={inputDisabled}
                        />
                        {filteredOptions.length > 0 && (
                            <ul className="autocomplete-optionsSIL">
                                {filteredOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleGuess(option.name)}
                                        className="autocomplete-optionSIL"
                                    >
                                        <img src={option.thumbnail} alt={option.name} className="option-thumbnailSIL" />
                                        <span>{option.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={() => handleGuess(guess)}
                        className="guess-buttonSIL"
                        disabled={inputDisabled || !guess || !silhouette.options.some(option => option.name.toLowerCase() === guess.toLowerCase())} // Desabilitando botão se o guess não for válido
                    >
                        <Send size={20} /> Enviar
                    </button>

                    {guessedList.length > 0 && (
                        <div className="guessed-list-containerSIL">
                            <h3><Award size={20} /> Opções já adivinhadas:</h3>
                            <ul className="guessed-listSIL">
                                {guessedList.map((item, index) => (
                                    <li key={index} className="guessed-itemSIL">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {attemptedAnimals.length > 0 && (
                        <div className="attempted-list-containerSIL">
                            <h3><EyeOff size={20} /> Pilotos já tentados:</h3>
                            <ul className="attempted-listSIL">
                                {attemptedAnimals.map((item, index) => (
                                    <li key={index} className="attempted-itemSIL">
                                        <img
                                            src={silhouette.options.find(option => option.name === item)?.thumbnail || ''}
                                            alt={item}
                                            className="attempted-thumbnailSIL"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {isCorrect && (
                        <p className="correct-messageSIL">
                            <Award size={24} /> Parabéns! Você acertou!
                        </p>
                    )}
                </div>

                <div className="instructions-containerSIL">
                    <h2 className="instructions-titleSIL"><HelpCircle size={24} /> Como Jogar</h2>
                    <ol>
                        <li className='liSIL'><Eye size={18} /> Observe a silhueta do piloto</li>
                        <li className='liSIL'><HelpCircle size={18} /> Tente adivinhar qual é o piloto</li>
                        <li className='liSIL'><Send size={18} /> Digite sua resposta e clique em "Enviar"</li>
                        <li className='liSIL'><Award size={18} /> Acerte o piloto para vencer!</li>
                    </ol>
                    <p>Dica: A cada tentativa errada, a imagem ficará um pouco menor.</p>
                </div>
            </div>
        </div>
    );
};

export default SilhouetteGame;
