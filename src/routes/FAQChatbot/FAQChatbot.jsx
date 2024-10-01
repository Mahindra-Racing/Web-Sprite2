import React, { useState, useRef, useEffect } from 'react';
import './FAQChatbot.css';

const FAQChatbot = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [activeCategory, setActiveCategory] = useState('overall');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const messagesEndRef = useRef(null);

    // FAQ questions and answers
    const faqData = {
        overall: [
            { question: "What is Formula E?", answer: "Formula E is a FIA-promoted world championship for electric car racing." },
            { question: "How many seasons has Formula E had?", answer: "Formula E started in 2014 and has completed several seasons to date." },
            { question: "Who are the main drivers in Formula E?", answer: "Some of the main drivers in Formula E include Jean-Eric Vergne, Lucas di Grassi, and Sébastien Buemi." }
        ],
        sustainability: [
            { question: "How does Formula E contribute to the environment?", answer: "Formula E promotes sustainability and electric mobility on and off the track." },
            { question: "What sustainability initiatives does Formula E have?", answer: "Formula E leads various initiatives including zero-emission racing and offsetting its carbon footprint." },
            { question: "How does Formula E engage fans in sustainability efforts?", answer: "Formula E actively involves fans through campaigns like the 'Drive for Clean Air'." }
        ],
        carTech: [
            { question: "What are the basic rules of Formula E?", answer: "Formula E uses fully electric cars and races on street circuits." },
            { question: "How fast can Formula E cars go?", answer: "Formula E cars can reach speeds of up to 280 km/h." },
            { question: "How long do Formula E batteries last?", answer: "Formula E batteries are designed to last the entire race distance." }
        ]
    };

    const chatbotQuestions = [
        { question: "What's the difference between Formula E and Formula 1?", answer: "Formula E uses only electric cars, while Formula 1 uses internal combustion engines." },
        { question: "Where are Formula E races held?", answer: "Formula E races are held on street circuits in major cities like London, Paris, and New York." },
        { question: "How long does a Formula E race last?", answer: "A typical Formula E race lasts around 45 minutes plus one lap." },
        { question: "How can I watch Formula E races?", answer: "Formula E races are broadcast on TV and streaming platforms, as well as our website. Check out the Stream tab for more details." }
    ];

    const toggleQuestion = (index) => setSelectedQuestion(selectedQuestion === index ? null : index);

    const handleInputChange = (e) => setInputMessage(e.target.value);

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleRating = (star) => setRating(star);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputMessage.trim() !== '') sendMessage(inputMessage);
    };

    const sendMessage = (message) => {
        setMessages([...messages, { text: message, isUser: true }]);
        setInputMessage('');

        // Check for specific greetings
        if (message.toLowerCase() === "hi") {
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: "Welcome to the Formula E Chat! How can I assist you today?", isUser: false }]);
            }, 1000);
            return; // Exit the function early
        }

        const matchedQuestion = chatbotQuestions.find(q => q.question.toLowerCase() === message.toLowerCase());

        if (matchedQuestion) {
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, { text: matchedQuestion.answer, isUser: false }]);
            }, 1000);
        } else {
            setTimeout(() => {
                setMessages(prevMessages => [...prevMessages, {
                    text: "I'm sorry, I don't have a specific answer to that question. You can try one of the options below or rephrase your question.",
                    isUser: false
                }]);
            }, 1000);
        }
    };

    useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

    return (
        <main className='mainAjuda'>
            <div className="faq-chatbot-containerFaqChatbot">
                <div className="faq-sectionFaqChatbot">
                    <h1 className="faq-titleFaqChatbot">Frequently Asked Questions - FAQ</h1>
                    <div className="faq-navFaqChatbot">
                        <button className={`nav-buttonFaqChatbot ${activeCategory === 'overall' ? 'activeFaqChatbot' : ''}`} onClick={() => setActiveCategory('overall')}>Overall</button>
                        <button className={`nav-buttonFaqChatbot ${activeCategory === 'sustainability' ? 'activeFaqChatbot' : ''}`} onClick={() => setActiveCategory('sustainability')}>Sustainability</button>
                        <button className={`nav-buttonFaqChatbot ${activeCategory === 'carTech' ? 'activeFaqChatbot' : ''}`} onClick={() => setActiveCategory('carTech')}>Car & Technology</button>
                    </div>
                    <div className="faq-contentFaqChatbot">
                        {faqData[activeCategory].map((item, index) => (
                            <div key={index} className={`faq-itemFaqChatbot ${selectedQuestion === index ? 'active' : ''}`} onClick={() => toggleQuestion(index)}>
                                <div className="faq-questionFaqChatbot">{item.question}</div>
                                {selectedQuestion === index && <div className="faq-answerFaqChatbot">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="chatbot-sectionFaqChatbot">
                    <h2 className="chatbot-titleFaqChatbot">Formula E Chat</h2>
                    <div className="chat-messagesFaqChatbot">
                        {messages.map((message, index) => (
                            <div key={index} className={`message-containerFaqChatbot ${message.isUser ? 'user-message' : 'bot-message'}`}>
                                {!message.isUser && <img src="https://play-lh.googleusercontent.com/qRAt8XQzsRcEG7LGb7dwOBTuNocOV-lokZjZot4xwIv6wDfgAeFFB5HKkKb8VqZhHNc" alt="Bot Avatar" className="bot-avatarFaqChatbot" />}
                                <div className={`message-contentFaqChatbot ${message.isUser ? 'user-messageFaqChatbot' : 'bot-messageFaqChatbot'}`}>{message.text}</div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSubmit} className="chat-inputFaqChatbot">
                        <input type="text" value={inputMessage} onChange={handleInputChange} placeholder="Type your message..." className="chat-input-fieldFaqChatbot" />
                        <button type="submit" className="chat-submit-buttonFaqChatbot">Send</button>
                    </form>
                    <div className="chatbot-optionsFaqChatbot">
                        <p>Or choose one of the questions below:</p>
                        {chatbotQuestions.map((item, index) => (
                            <button key={index} onClick={() => sendMessage(item.question)} className="chatbot-option-buttonFaqChatbot">{item.question}</button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FAQChatbot;
