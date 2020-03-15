import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { shuffle } from 'lodash';
import { request } from 'axios';

class Questions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      indexOfQuestion: -1,
      question: '',
      answers: [],
      correctAnswer: '',
      points: 0,
    }
  }

  nextQuestion() {
    const indexOfQuestion = this.state.indexOfQuestion + 1;
    const item = this.state.items[indexOfQuestion];
    if (item !== undefined) {
      this.setState({
        indexOfQuestion: indexOfQuestion,
        question: item.question,
        answers: shuffle([item.correct_answer, ...item.incorrect_answers]),
        correctAnswer: item.correct_answer
      });
    }
  }

  answerQuestion(answer) {
    if (this.state.correctAnswer === answer) {
      this.setState({
        points: this.state.points + 1
      })
    }
    this.nextQuestion();
  }

  render() {
    return (
      <div>
        {this.state.points}
        <Card>
          <Card.Content>
            <Card.Description>
              <h4>{ this.state.question }</h4>
            </Card.Description>
          </Card.Content>
        </Card>
        {
          this.state.answers.map((answer, index) => { 
            return <Button key={index} onClick={() => this.answerQuestion(answer)}>
              {answer}
            </Button>
          })
        }
      </div>
    )
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions() {
    request({
      url: 'api.php',
      params: {
        amount: this.props.amount,
        category: this.props.category.id,
        difficulty: this.props.difficulty.id
      }
    }).then(response => {
      this.setState({
        items: response.data.results
      });
      this.nextQuestion();
    });
  }

}

export default Questions;