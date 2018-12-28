import React from 'react';
import Popup from './popup.jsx';


export default class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: '',
      price: 0,
      rating: 0,
      reviewCount: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3010/${this.props.id}/listings`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      data = JSON.parse(data)[0];
      this.setState({price: data.price, rating: data.rating, reviewCount: data.reviewCount});
    });
  }

  handleButtonClick() {
    this.setState({popup: <Popup id = {this.props.id} state = {this.state} handleExit = {this.handleExit}/>})
  }

  handleExit(e) {
    e.preventDefault();
    this.setState({popup: ''});
  }

  render() {
    return (
      <div>
        {this.state.popup} 
        <div className = 'footer'>
          <div className = 'padded-footer'>
            <button className = 'book-button' onClick = {this.handleButtonClick}>BOOK</button> 
          </div>
        </div>
      </div>
    );
  }
}
