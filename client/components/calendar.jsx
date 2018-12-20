import React from 'react';
import Popup from './popup.jsx'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: '',
      price: 0,
      rating: 0,
      reviewCount: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleButtonClick() {
    this.setState({popup: <Popup state = {this.state}/>})
  }

  componentDidMount() {
    fetch('http://localhost:3010/1', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({price: data.price, rating: data.rating, reviewCount: data.reviewCount});
      console.log(this);
      console.log(this.state);
      this.handleButtonClick();
    });
  }

  render() {
    return (
      
      <div>
        {console.log(this.state)}
        <button id = 'book-button' onClick = {this.handleButtonClick}>BOOK</button>
        {this.state.popup}
      </div>
    );
  }
}