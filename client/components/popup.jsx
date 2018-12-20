import React from 'react';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {

    };
  }

  render() {
    return (
      <div id = 'block' >
        <button id = 'exit-button'>X</button>
        Hello World
      </div>
    );
  }
}