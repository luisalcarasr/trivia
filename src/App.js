import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Container} from 'semantic-ui-react';
import './App.css';
import Amount from './components/Amount';
import Categories from './components/Categories';
import Difficulties from './components/Difficulties';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import updateLanguage from './language/actions/updateLanguage';

function App() {

  const [state, setState] = useState({
    step: 0,
    category: {},
    difficulty: {},
    amount: 0
  });

  return (
    <Container className="main-container">
      <Navbar/>
      <div id="content">
        {
          state.step === 0 && <Categories onChange={category => {
            setState({category: category, step: 1})
          }}/>
        }
        {
          state.step === 1 && <Difficulties onChange={difficulty => {
            setState({difficulty: difficulty, step: 2})
          }}/>
        }
        {
          state.step === 2 && <Amount onChange={amount => {
            setState({amount: amount})
          }}/>
        }
        {
          state.step === 2 && <Button primary onClick={() => {
            setState({step: 3})
          }}>Play!</Button>
        }
        {
          state.step === 3 &&
          <Questions category={state.category} difficulty={state.difficulty} amount={state.amount}/>
        }
      </div>
    </Container>
  );

}

export default App;
