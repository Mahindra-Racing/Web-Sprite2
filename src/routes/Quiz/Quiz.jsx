import React, { useState } from 'react';
import './Quiz.css'
const questions = [
  {
    question: 'Which team won the inaugural Formula E championship?',
    options: ['Audi Sport ABT', 'DS Techeetah', 'Renault e.dams', 'Mahindra Racing'],
    answer: 'Renault e.dams',
  },
  {
    question: 'Who was the first Formula E driver to win a championship twice?',
    options: ['Lucas di Grassi', 'Sébastien Buemi', 'Jean-Éric Vergne', 'Sam Bird'],
    answer: 'Jean-Éric Vergne',
  },
  {
    question: 'In which year did Formula E start?',
    options: ['2013', '2014', '2015', '2016'],
    answer: '2014',
  },
  {
    question: 'Which city hosted the first-ever Formula E race?',
    options: ['Beijing', 'Paris', 'London', 'New York'],
    answer: 'Beijing',
  },
  {
    question: 'Which manufacturer has the most wins in Formula E?',
    options: ['Nissan', 'Jaguar', 'Mercedes', 'Renault'],
    answer: 'Renault',
  },
  {
    question: 'Who won the 2020-21 Formula E championship?',
    options: ['Nyck de Vries', 'Mitch Evans', 'Edoardo Mortara', 'Stoffel Vandoorne'],
    answer: 'Nyck de Vries',
  },
  {
    question: 'Which Formula E race is known as the Monaco E-Prix?',
    options: ['Paris', 'New York', 'Monaco', 'Hong Kong'],
    answer: 'Monaco',
  },
  {
    question: 'What is the primary power source for Formula E cars?',
    options: ['Hydrogen', 'Biofuel', 'Electric Battery', 'Solar'],
    answer: 'Electric Battery',
  },
  {
    question: 'Which driver holds the record for the most wins in Formula E?',
    options: ['Lucas di Grassi', 'Jean-Éric Vergne', 'Sébastien Buemi', 'Sam Bird'],
    answer: 'Sébastien Buemi',
  },
  {
    question: 'Which team is a founding member of Formula E?',
    options: ['DS Penske', 'Audi Sport ABT', 'NIO 333', 'Mahindra Racing'],
    answer: 'Mahindra Racing',
  },
];

const QuizFormulaE = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <main className='mainQuiz'>
      <div className="quiz-container">
        <h1 className="quiz-title">Formula E Quiz</h1>
        {!showResult ? (
          <div className="quiz-question-container">
            <h2 className="quiz-question">{questions[currentQuestionIndex].question}</h2>
            <div className="quiz-options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="quiz-next-button"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        ) : (
          <div className="quiz-result-container">
            <h2 className="quiz-result-title">Quiz Completed!</h2>
            <p className="quiz-score">Your Score: {score} out of {questions.length}</p>
            <button className="quiz-restart-button" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuizFormulaE;