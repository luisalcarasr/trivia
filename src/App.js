import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import Categories from './components/Categories';
import Difficulties from './components/Difficulties';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import { getAmountByDifficulty } from "./services/trivia";

function App() {

  const [step, setStep] = useState(0);
  const [category, setCategory] = useState({});
  const [difficulty, setDifficulty] = useState({});
  const [amount, setAmount] = useState(0);

  const categoryChangeHandler = (category) => {
    setCategory(category);
    setStep(1);
  }

  const cancelDifficultySelectionHandler = () => {
    setDifficulty(difficulty);
    setAmount(getAmountByDifficulty(difficulty));
    setStep(2);
  }

  return (
    <Container className="main-container">
      <Navbar/>
      <div id="content">
        {
          step <= 1 && <Categories onChange={categoryChangeHandler}/>
        }
        <Difficulties open={step === 1} onCancel={() => setStep(0)} onChange={cancelDifficultySelectionHandler}/>
        {
          step === 2 && <Questions category={category} difficulty={difficulty} amount={amount}/>
        }
      </div>
    </Container>
  );

}

export default App;
