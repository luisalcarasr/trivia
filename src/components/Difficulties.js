import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './Difficulties.css'


class Difficulties extends Component {

  constructor(props) {
    super(props);
    this.state = {
      difficulties: [
        {
          id: 'easy',
          name: 'Easy'
        },
        {
          id: 'medium',
          name: 'Medium'
        },
        {
          id: 'hard',
          name: 'Hard'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <ul className="difficulties-list">
          {
            this.state.difficulties.map(
              difficulty => { 
                return (
                  <li key ={difficulty.id}>
                    <Button onClick={() => this.props.onChange(difficulty) }>
                      {difficulty.name}
                    </Button>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    );
  }

}

export default Difficulties;