import React, { useState, useEffect } from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Question.css';
import { useSelector } from 'react-redux';
import { translate } from '../services/translator';

const Question = (props) => {
  const [text, setText] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setAnswer] = useState(null); 

  const languageCode = useSelector(state => state.language);

  useEffect(() => {

    (async () => {
      let texts = [];
      for (const answer of props.answers) {
        texts.push(await translate(answer, languageCode));
      }
      console.log(texts);
      setAnswers(texts);
    })();

    translate(props.text, languageCode).then(setText);
    translate(props.correctAnswer, languageCode).then(setCorrectAnswer);

    setIsCorrect(null);
    setAnswer(null);
  }, [props, languageCode]);

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