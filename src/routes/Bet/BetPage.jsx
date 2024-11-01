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
                nome: tipo === 'Piloto' ? selecaoPiloto?.nome : selecaoConstrutor?.nome,
                odds: tipo === 'Piloto' ? selecaoPiloto?.odds : selecaoConstrutor?.odds,
                valor
            };

            if (novaAposta.nome) {
                setApostas([...apostas, novaAposta]);
                setSaldo(saldo - valor);
                setValorAposta('');
                setSelecaoPiloto(null);
                setSelecaoConstrutor(null);
                setErro('');
            } else {
                setErro('Please select a pilot or constructor to bet on.');
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
                        </nav>

                        {pagina === 'wallet' && (
                            <div className="wallet-containerBET">
                                <div className="section-header">
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
                                    <button className="adicionar-dinheiro-btnBET" onClick={adicionarDinheiro}>Add</button>
                                </div>
                                <div className="how-to-bet-containerBET">
                                    <h3 className="how-to-bet-titleBET">How to Place a Bet</h3>
                                    <ol className="how-to-bet-stepsBET">
                                        <li>Select your pilot or builder from the options menu.</li>
                                        <li>Enter the amount you wish to bet.</li>
                                        <li>Click 'Bet' to confirm your bet.</li>
                                    </ol>
                                    <p className="how-to-bet-noteBET">Remember to gamble responsibly!</p>
                                </div>
                            </div>
                            
                        )}

                        {pagina === 'bet' && (
                            <div className="bet-containerBET">
                                <div className="section-header">
                                    <h2 className="section-titleBET">FE Bets</h2>
                                </div>
                                <div className="saldo-valorBET saldo-pequenoBET">Balance: $ {saldo.toFixed(2)}</div>

                                <div className="opcoes-containerBET">
                                    <h3 className="category-titleBET">São Paulo E-prix - Winner</h3>
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
                                    <h3 className="category-titleBET">Winning Constructor</h3>
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
                                        type="number"
                                        value={valorAposta}
                                        placeholder="Bet amount"
                                        onChange={(e) => setValorAposta(e.target.value)}
                                        className="value-inputBET"
                                    />
                                    <button className="aposta-btnBET" onClick={() => fazerAposta(selecaoPiloto ? 'Piloto' : 'Construtor')}>Place Bet</button>
                                </div>
                                {erro && <p className="error-messageBET">{erro}</p>}
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
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BetPage;