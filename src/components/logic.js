import React, { useState } from 'react';
import Timer from './Timer';
import '../style/Quiz.css';

const questions = [
  {
    question: '1.Which of the following is the correct way to declare a variable in JavaScript?',
    answers: ['let x = 5;', 'var x == 5;', 'const x <- 5;', 'int x = 5;'],
    correct: 0,
  },
  {
    question: '2.What is the output of the following code: console.log(typeof null);',
    answers: ['"null"', '"object"', '"undefined"', '"boolean"'],
    correct: 1,
  },
  {
    question: '3.Which method is used to add elements to the end of an array in JavaScript?',
    answers: ['push()', 'pop()', 'shift()', 'unshift()'],
    correct: 0,
  },
  {
    question: '4.What does "===" mean in JavaScript?',
    answers: [
      'Assignment operator',
      'Checks equality without type coercion',
      'Checks equality with type coercion',
      'None of the above',
    ],
    correct: 1,
  },
  {
    question: '5.Which of the following is a way to create a function in JavaScript?',
    answers: [
      'function myFunction() {}',
      'var myFunction = function() {}',
      'const myFunction = () => {}',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: '6.What is the result of this expression: "5" + 2?',
    answers: ['7', '"52"', 'undefined', 'NaN'],
    correct: 1,
  },
  {
    question: '7.Which keyword is used to create a constant variable in JavaScript?',
    answers: ['var', 'let', 'const', 'constant'],
    correct: 2,
  },
  {
    question: '8.What will be the output of: console.log(0.1 + 0.2 === 0.3);',
    answers: ['true', 'false', 'undefined', 'NaN'],
    correct: 1,
  },
  {
    question: '9.How can you convert a string "123" to a number in JavaScript?',
    answers: ['Number("123")', 'parseInt("123")', '+"123"', 'All of the above'],
    correct: 3,
  },
  {
    question: '10.Which of the following is a falsy value in JavaScript?',
    answers: ['"false"', '0', '{}', '[]'],
    correct: 1,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [currentQuestion]: index });
    if (index === questions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleTimeout = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      {!submitted ? (
        <>
          <div className="quiz-header">
            <Timer onTimeout={handleTimeout} />
          </div>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(index)}
                className={answers[currentQuestion] === index ? 'selected' : ''}
              >
                {answer}
              </li>
            ))}
          </ul>

          <div className="navigation-buttons">
            <button onClick={handlePrev} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
              Next
            </button>
          </div>

          {currentQuestion === questions.length - 1 && (
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          )}
        </>
      ) : (
        <div className="result">
          <h3>Your Score: {score}/{questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
