import React, { Component } from 'react';

class Amount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 10
    };
  }

  render() {
    return (
      <div style={{margin: 10}}>
        <div className="ui left icon input">
          <input onChange={event => this.props.onChange(event.target.value)} type="text" placeholder="Number of Questions"/>
          <i aria-hidden="true" className="question icon"></i>
        </div>
      </div>
    );
  }

}

export default Amount;