import React, { useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import './Question.css';

const Question = ({ text, answers, correctAnswer, onAnswer }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setAnswer] = useState(null);

  const answerQuestion = (answer) => {
    setIsCorrect(correctAnswer === answer);
    setAnswer(answer);
    setTimeout(() => {
      onAnswer(correctAnswer === answer)
      setAnswer(null)
    }, 1000);
  }

  console.log(text, answers, correctAnswer)

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