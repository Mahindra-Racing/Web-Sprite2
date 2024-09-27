import React, { useState, useEffect } from 'react';
import './Classificacao.css';

const standingsData = [
    {
        position: 1,
        driver: 'PASCAL WEHRLEIN',
        points: 198,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/4b62fd44-831d-4b01-9f11-2aaf2c47075c.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/a/ab/Porsche_Formula_E.png'
    },
    {
        position: 2,
        driver: 'MITCH EVANS',
        points: 192,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/2543b91c-2543-4835-b9fc-17b5fbc79cb1.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png'
    },
    {
        position: 3,
        driver: 'NICK CASSIDY',
        points: 176,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/47579af2-ce5a-4ba9-800b-b6821ca934e3.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png'
    },
    {
        position: 4,
        driver: 'OLIVER ROWLAND',
        points: 156,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/00098f8a-69be-4f84-a7ac-baedcc5f9e9c.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/a/a9/Logotipo_da_Nissan_Formula_E_Team.png'
    },
    {
        position: 5,
        driver: 'JEAN-ÉRIC VERGNE',
        points: 139,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/3d5b4033-31b9-442b-a0b5-183d51ebde5e.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp'
    },
    {
        position: 6,
        driver: 'ANTÓNIO-FÉLIX DA-COSTA',
        points: 134,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/fcc99980-3e5d-4a96-856a-8773641ceebe.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/a/ab/Porsche_Formula_E.png'
    },
    {
        position: 7,
        driver: 'JAKE DENNIS',
        points: 122,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/6c47b61a-5bb4-4ae4-9e0a-63a411de0782.png',
        teamImage: 'https://andrettiglobal.com/wp-content/uploads/2023/11/AG_FE_PrimaryLogo_Blk.png'
    },
    {
        position: 8,
        driver: 'MAXIMILIAN GÜNTHER',
        points: 73,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/a4aa14e5-3812-425a-a4b6-310b4ad7023c.png',
        teamImage: 'https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw7b9208e4/LogosTeams/LogoMaserati23.png'
    },
    {
        position: 9,
        driver: 'ROBIN FRIJNS',
        points: 66,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/ba3d3d66-41de-4b1e-bfd6-7f318b2ec2af.png',
        teamImage: 'https://seeklogo.com/images/E/envision-racing-formula-e-logo-5D59B99E28-seeklogo.com.png'
    },
    {
        position: 10,
        driver: 'STOFFEL VANDOORNE',
        points: 61,
        driverImage: '//static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/small/3f4d9ccc-0453-410c-8542-225bd2ebf280.png',
        teamImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp'
    },
];

const teamStandingsData = [
    {
        position: 1,
        team: 'JAGUAR TCS RACING',
        points: 368,
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/9/97/Logo_da_Jaguar_Racing.png'
    },
    {
        position: 2,
        team: 'TAG HEUER PORSCHE FORMULA E TEAM',
        points: 332,
        teamImage: 'https://assets.motorsportstats.com/team/logo/FormulaE_Team_TAGHeuerPorscheFormulaETeam.png'
    },
    {
        position: 3,
        team: 'DS PENSKE',
        points: 200,
        teamImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/LogoDS_PENSKE.webp'
    },
    {
        position: 4,
        team: 'NISSAN FORMULA E TEAM',
        points: 182,
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/a/a9/Logotipo_da_Nissan_Formula_E_Team.png'
    },
    {
        position: 5,
        team: 'ANDRETTI FORMULA E',
        points: 169,
        teamImage: 'https://andrettiglobal.com/wp-content/uploads/2023/11/AG_FE_PrimaryLogo_Blk.png'
    },
    {
        position: 6,
        team: 'ENVISION RACING',
        points: 121,
        teamImage: 'https://seeklogo.com/images/E/envision-racing-formula-e-logo-5D59B99E28-seeklogo.com.png'
    },
    {
        position: 7,
        team: 'NEOM MCLAREN FORMULA E TEAM',
        points: 101,
        teamImage: 'https://queen-of-motorsport.com/img/logos/NEOMMclaren.png'
    },
    {
        position: 8,
        team: 'MESERATI MSG RACING',
        points: 81,
        teamImage: 'https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw7b9208e4/LogosTeams/LogoMaserati23.png'
    },
    {
        position: 9,
        team: 'ABT CUPRA FORMULA E TEAM',
        points: 56,
        teamImage: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/Logotipo_da_ABT_CUPRA_Formula_E_Team.png'
    },
    {
        position: 10,
        team: 'MAHINDRA RACING',
        points: 47,
        teamImage: 'https://store.fiaformulae.com/on/demandware.static/-/Sites-navigation-catalog-FE-S9/default/dw8427c471/LogosTeams/LogoMahindra2.png'
    },
];

const additionalImages = {
    1: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/05dab754-2899-411b-9c4e-72311a36cc9c.png',
    2: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/feb6762c-ae66-4c8e-a892-f958d6f7e774.png',
    3: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/e05ede6d-d065-497b-a298-85afeeeb2ab1.png',
    4: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/6c04a435-8357-42f6-8360-5305d00050ee.png',
    5: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0a33d76e-64e6-4823-b70b-27b79a48679c.png',
    6: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c63aedad-a141-4ebc-9794-41a37909ef0c.png',
    7: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/0176f3e2-1247-494d-9a8d-b0950437ee8f.png',
    8: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/19821c93-f115-41fb-af4f-80831a91afef.png',
    9: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/c57e46c4-8163-44f6-9c0d-b74579d51000.png',
    10: '//static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png',
};

const Classificacao = () => {
    const [standings, setStandings] = useState([]);
    const [teamStandings, setTeamStandings] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchStandings = () => {
            setTimeout(() => {
                setStandings(standingsData);
                setTeamStandings(teamStandingsData);
            }, 1000);
        };

        fetchStandings();
    }, []);

    const sortStandings = () => {
        const sortedStandings = [...standings].sort((a, b) => {
            return sortOrder === 'asc' ? a.points - b.points : b.points - a.points;
        });
        setStandings(sortedStandings);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <main className='main1'>
            <div id="section2">
                <div className="main-container6">
                    <div className='classi-bar'>
                        <div className='classi-bar-titulo-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#4274ff"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" /></svg>
                            <h1 className='classi-bar-titulo'>2024 - Tabela de Classificação</h1>
                        </div>
                        <div>
                            <a href="#stranding-piloto"><button>Piloto</button></a>
                            <a href="#stranding-equipe"><button>Equipe</button></a>
                        </div>
                    </div>

                    {/* Tabela de Classificação dos Pilotos */}
                    <div className="standings-container" id='stranding-piloto'>
                        <h1 className='titulo-classi'>Classificação de Pilotos - Fórmula E 2024</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Posição</th>
                                    <th>Piloto</th>
                                    <th>Equipe</th>
                                    <th>Pontos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standings.map((driver) => {
                                    const [firstName, lastName] = driver.driver.split(' ');
                                    return (
                                        <tr key={driver.position}>
                                            <td>{driver.position}</td>
                                            <td>
                                                <div className="piloto-equipe-container">
                                                    <img
                                                        src={driver.driverImage}
                                                        alt={driver.driver}
                                                        className="driver-image"
                                                    />
                                                    <div className="driver-name">
                                                        <span className="first-name">{firstName}</span><br />
                                                        <span className="last-name">{lastName}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="piloto-equipe-container">
                                                    <img
                                                        src={driver.teamImage}
                                                        alt={driver.team}
                                                        className="team-logo"
                                                    />
                                                </div>
                                            </td>
                                            <td className='pontucao-driver'>{driver.points}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Tabela de Classificação das Equipes */}
                    <div className="standings-container" id='stranding-equipe'>
                        <h1 className='titulo-classi'>Classificação de Equipes - Fórmula E 2024</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Posição</th>
                                    <th>Equipe</th>
                                    <th>Pontos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamStandings.map((team) => (
                                    <tr key={team.position}>
                                        <td>{team.position}</td>
                                        <td>
                                            <div className="piloto-equipe-container">
                                                <img
                                                    src={team.teamImage}
                                                    alt={team.team}
                                                    className="team-logo"
                                                />
                                                {/* Imagem adicional dependendo da posição */}
                                                {additionalImages[team.position] && (
                                                    <img
                                                        src={additionalImages[team.position]}
                                                        alt={`Imagem para o ${team.position}º lugar`}
                                                        className="additional-team-image"
                                                    />
                                                )}
                                                <span className='team-team'>{team.team}</span>
                                            </div>
                                        </td>
                                        <td className='pontucao-driver'>{team.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Classificacao;
