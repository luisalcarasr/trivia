import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Question.css';

const Question = (props) => {
  const [text, setText] = useState(props.text);
  const [answers, setAnswers] = useState(props.answers);
  const [correctAnswer, setCorrectAnswer] = useState(props.correctAnswer);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setAnswer] = useState(null); 

  useEffect(() => {
    setText(props.text);
    setAnswers(props.answers);
    setCorrectAnswer(props.correctAnswer);
    setIsCorrect(null);
    setAnswer(null);
  }, [props]);

  const answerQuestion = (answer) => {
    setIsCorrect(correctAnswer === answer);
    setAnswer(answer);
    setTimeout(() => props.onAnswer(correctAnswer === answer), 1000);
  }

  return (
    <div>
      <Card id="question">
        <Card.Content>
          <Card.Description>
            <h4>{text}</h4>
          </Card.Description>
        </Card.Content>
      </Card>
      {
        answers.map((answer, index) => 
          <Button 
            positive={!!selectedAnswer && answer === correctAnswer}
            negative={!isCorrect && answer === selectedAnswer}
            key={index}
            disabled={!!selectedAnswer}
            onClick={() => answerQuestion(answer)}
          >
            {answer}
          </Button>
        )
      }
    </div>
  );
};

export default Question;