import React, { Component } from 'react';
import { shuffle } from 'lodash';
import { request } from 'axios';
import Question from './Question';
import { AllHtmlEntities } from 'html-entities';
import { Progress } from 'semantic-ui-react';
import Results from './Results';

const parser = new AllHtmlEntities();

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
        question: parser.decode(item.question),
        answers: shuffle([item.correct_answer, ...item.incorrect_answers]).map(parser.decode),
        correctAnswer: parser.decode(item.correct_answer)
      });
    } 
    if (this.progress < 100) {
      this.setState({
        indexOfQuestion: indexOfQuestion
      });
    }
  }

  answerQuestion = (isCorrect) => {
    if (isCorrect) {
      this.setState({
        points: this.state.points + 1
      })
    }
    this.nextQuestion();
  }

  get progress() {
    let progress = (100 / this.state.items.length) * (this.state.indexOfQuestion);
    progress = progress === Infinity || progress < 0 ? 0 : progress;
    return Math.round(progress);
  }

  render() {
    return (
      <div>
        <Progress percent={this.progress} inverted color="blue" progress />
        { this.progress < 100
          ? <Question 
            text={this.state.question}
            answers={this.state.answers}
            correctAnswer={this.state.correctAnswer}
            onAnswer={this.answerQuestion} />
          : <Results points={this.state.points} total={this.state.items.length}></Results> 
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