import React, { useState } from 'react';
import './BetPage.css';

const BetPage = () => {
    const [saldo, setSaldo] = useState(0);
    const [valorAposta, setValorAposta] = useState('');
    const [apostas, setApostas] = useState([]);
    const [selecaoPiloto, setSelecaoPiloto] = useState(null);
    const [selecaoConstrutor, setSelecaoConstrutor] = useState(null);
    const [valorAdicionar, setValorAdicionar] = useState('');
    const [erro, setErro] = useState('');
    const [pagina, setPagina] = useState('wallet');
    const [corSelecionada, setCorSelecionada] = useState(null);
    const [resultadoDouble, setResultadoDouble] = useState(null);
    const [mensagemResultado, setMensagemResultado] = useState('');
    const [resultadoClass, setResultadoClass] = useState('');

    const pilotos = [
        { nome: 'Pascal Wehrlein', odds: 2.1 },
        { nome: 'Jake Dennis', odds: 2.4 },
        { nome: 'Mitch Evans', odds: 2.8 },
        { nome: 'Nick Cassidy', odds: 3.0 },
        { nome: 'Stoffel Vandoorne', odds: 3.5 },
        { nome: 'Antonio Felix da Costa', odds: 4.0 },
        { nome: 'Nyck de Vries', odds: 5.5 },
        { nome: 'Sebastien Buemi', odds: 6.0 },
        { nome: 'René Rast', odds: 7.2 },
      ];
    
      const construtores = [
        { nome: 'Jaguar TCS Racing', odds: 1.8 },
        { nome: 'TAG Heuer Porsche', odds: 2.0 },
        { nome: 'Mahindra Racing', odds: 2.5 },
        { nome: 'Avalanche Andretti', odds: 3.0 },
        { nome: 'DS Penske', odds: 3.2 },
        { nome: 'Nissan Formula E Team', odds: 4.5 },
        { nome: 'Envision Racing', odds: 5.0 },
      ];

    const cores = ['black', 'white', 'blue'];

    const adicionarDinheiro = () => {
        const valor = parseFloat(valorAdicionar);
        if (valor > 0) {
            setSaldo(saldo + valor);
            setValorAdicionar('');
            setErro('');
        } else {
            setErro('Please enter a valid value greater than zero.');
        }
    };

    const selecionarOpcao = (tipo, opcao) => {
        if (tipo === 'Piloto') {
            setSelecaoPiloto(opcao);
            setSelecaoConstrutor(null);
        } else {
            setSelecaoConstrutor(opcao);
            setSelecaoPiloto(null);
        }
    };

    const fazerAposta = (tipo) => {
        const valor = parseFloat(valorAposta);
        if (valor > 0 && valor <= saldo) {
            const novaAposta = {
                tipo,
                nome: tipo === 'Piloto' ? selecaoPiloto.nome : selecaoConstrutor.nome,
                odds: tipo === 'Piloto' ? selecaoPiloto.odds : selecaoConstrutor.odds,
                valor
            };
            setApostas([...apostas, novaAposta]);
            setSaldo(saldo - valor);
            setValorAposta('');
            setSelecaoPiloto(null);
            setSelecaoConstrutor(null);
            setErro('');
        } else {
            setErro('Bet amount cannot exceed the available balance.');
        }
    };

    const jogarDouble = () => {
        const valor = parseFloat(valorAposta);
        if (valor > 0 && valor <= saldo) {
            const resultado = cores[Math.floor(Math.random() * cores.length)];
            setResultadoDouble(resultado);
            setSaldo(saldo - valor);
            setValorAposta('');
            setCorSelecionada(null);
            setErro('');

            if (resultado === corSelecionada) {
                const ganho = saldo - valor + valor * 2 - saldo;
                setSaldo(saldo + ganho);
                setMensagemResultado(`You won $ ${ganho.toFixed(2)}!`);
                setResultadoClass('won');
            } else {
                setMensagemResultado(`you lost R$ ${valor.toFixed(2)}.`);
                setResultadoClass('lost');
            }
        } else {
            setErro('Bet amount cannot exceed the available balance.');
        }
    };

    return (
        <main className='mainBET'>
            <div className="main-containerBET">
                <div className="left-containerBET">
                    <div className="content-containerBET">
                        <nav className="navegacao-containerBET">
                            <button
                                className={`nav-btnBET ${pagina === 'wallet' ? 'ativo' : ''}`}
                                onClick={() => setPagina('wallet')}
                            >
                                Wallet
                            </button>
                            <button
                                className={`nav-btnBET ${pagina === 'bet' ? 'ativo' : ''}`}
                                onClick={() => setPagina('bet')}
                            >
                                FE Bets
                            </button>
                            <button
                                className={`nav-btnBET ${pagina === 'double' ? 'ativo' : ''}`}
                                onClick={() => setPagina('double')}
                            >
                                Double
                            </button>
                        </nav>

                        {pagina === 'wallet' && (
                            <div className="wallet-containerBET">
                                <div className="section-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#343a40"><path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z" /></svg>
                                    <h2 className="section-titleBET">Wallet</h2>
                                </div>
                                <div className="saldo-valorBET saldo-grandeBET">$ {saldo.toFixed(2)}</div>
                                <div className="adicionar-dinheiro-containerBET">
                                    <input
                                        className="value-inputBET"
                                        type="number"
                                        value={valorAdicionar}
                                        placeholder="Value to add"
                                        onChange={(e) => setValorAdicionar(e.target.value)}
                                    />
                                    <button className="adicionar-dinheiro-btnBET" onClick={adicionarDinheiro}>Value to add</button>
                                </div>
                                <div className="how-to-bet-containerBET">
                                    <h3 className="how-to-bet-titleBET">How to Place a Bet</h3>
                                    <ol className="how-to-bet-stepsBET">
                                        <li>Select your pilot or builder from the options menu.</li>
                                        <li>Enter the amount you wish to bet.</li>
                                        <li>Click 'Bet' to confirm your bet.</li>
                                    </ol>
                                    <p className="how-to-bet-noteBET">Lembre-se de jogar com responsabilidade!</p>
                                </div>
                            </div>
                        )}

                        {pagina === 'bet' && (
                            <div className="bet-containerBET">
                                <div className="section-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#343a40"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
                                    <h2 className="section-titleBET">FE Bets</h2>
                                </div>
                                <div className="saldo-valorBET saldo-pequenoBET">Balance: $ {saldo.toFixed(2)}</div>

                                <div className="opcoes-containerBET">
                                    <div className="section-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#343a40"><path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z"/></svg>
                                        <h3 className="category-titleBET">São Paulo E-prix - Winner</h3>
                                    </div>
                                    {pilotos.map((piloto, index) => (
                                        <button
                                            key={index}
                                            className={`opcao-btnBET ${selecaoPiloto?.nome === piloto.nome ? 'selecionado' : ''}`}
                                            onClick={() => selecionarOpcao('Piloto', piloto)}
                                        >
                                            <span>{piloto.nome}</span>
                                            <span className="opcao-odds">Odds: {piloto.odds}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="opcoes-containerBET">
                                    <div className="section-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#343a40"><path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z"/></svg>
                                        <h3 className="category-titleBET">São Paulo E-prix - Winning Constructor</h3>
                                    </div>
                                    {construtores.map((construtor, index) => (
                                        <button
                                            key={index}
                                            className={`opcao-btnBET ${selecaoConstrutor?.nome === construtor.nome ? 'selecionado' : ''}`}
                                            onClick={() => selecionarOpcao('Construtor', construtor)}
                                        >
                                            <span>{construtor.nome}</span>
                                            <span className="opcao-odds">Odds: {construtor.odds}</span>
                                        </button>
                                    ))}
                                </div>



                                <div className="aposta-inputBET">
                                    <input
                                        className="value-inputBET"
                                        type="number"
                                        value={valorAposta}
                                        placeholder="Bet value"
                                        onChange={(e) => setValorAposta(e.target.value)}
                                    />
                                    <button className="aposta-btnBET" onClick={() => fazerAposta(selecaoPiloto ? 'Pilot' : 'Constructor')}>Bet</button>
                                </div>

                                <div className="resumo-containerBET">
                                    <h2 className="section-titleBET">Bet Summary</h2>
                                    {apostas.length === 0 ? (
                                        <p className="empty-messageBET">You haven't placed any bets yet.</p>
                                    ) : (
                                        apostas.map((aposta, index) => (
                                            <div key={index} className="aposta-itemBET">
                                                <span>{aposta.tipo} - {aposta.nome} (Odds: {aposta.odds})</span>
                                                <span>$ {aposta.valor.toFixed(2)}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {pagina === 'double' && (
                            <div className="double-containerBET">
                                <div className="section-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#343a40  "><path d="M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-320-10q-106-28-173-114T40-480q0-110 67-196t173-114v84q-72 25-116 87t-44 139q0 77 44 139t116 87v84Zm320-310Zm0 240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" /></svg>
                                    <h2 className="section-titleBET">Double</h2>
                                </div>
                                <div className="saldo-valorBET saldo-pequenoBET">Balance: $ {saldo.toFixed(2)}</div>
                                <div className="cores-containerBET">
                                    {cores.map((cor, index) => (
                                        <button
                                            key={index}
                                            className={`cor-btnBET ${cor} ${corSelecionada === cor ? 'select' : ''}`}
                                            onClick={() => setCorSelecionada(cor)}
                                        >
                                            {cor}
                                        </button>
                                    ))}
                                </div>
                                <div className="aposta-inputBET">
                                    <input
                                        className="value-inputBET"
                                        type="number"
                                        value={valorAposta}
                                        placeholder="Bet value"
                                        onChange={(e) => setValorAposta(e.target.value)}
                                    />
                                    <button className="aposta-btnBET" onClick={jogarDouble}>Play Double</button>
                                </div>
                                {resultadoDouble && (
                                    <div className={`resultado-doubleBET ${resultadoDouble}`}>
                                        Result: {resultadoDouble}
                                    </div>
                                )}
                                {mensagemResultado && (
                                    <div className={`mensagem-resultadoBET ${resultadoClass}`}>
                                        {mensagemResultado}
                                    </div>
                                )}
                            </div>
                        )}

                        {erro && <p className="erro-messageBET">{erro}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BetPage;