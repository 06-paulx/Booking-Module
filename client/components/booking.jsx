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
    this.star = "M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z";
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.minimizePopUp = this.minimizePopUp.bind(this);
    this.updateListings = this.updateListings.bind(this);
  }

  componentDidMount() {
    this.updateListings();
  }

  handleButtonClick() {
    var cal = document.getElementById('block');
    if (this.state.popup === '' && !document.contains(cal)) {
      this.setState({popup: <Popup id = {this.props.id} state = {this.state} star = {this.star} minimizePopUp = {this.minimizePopUp} handleExit = {this.handleExit}/>})
    }
  }

  handleExit(e) {
    e.preventDefault();
    this.minimizePopup();
  }

  minimizePopUp() {
    this.setState({popup: ''});
  }

  updateListings() {
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

  render() {
    return (
      <div>
        {this.state.popup} 
        <div className = 'padded-footer flexbox space-between'>
          <div className = 'flexbox footer-hide-section'>
            <div className = 'paul-x'>
              paul-X
            </div>
            <div>
              <div style = {{paddingBottom: '5px'}}>
                Entire Apartment in San Francisco
              </div>
              <div className = 'flexbox'>
                {[...Array(5)].map((stars, index) => {
                    if (index < this.state.rating) {
                        return <span key={index}><svg viewBox="0 0 1000 1000" className = 'stars'><path d={this.star}></path></svg></span>
                    }
                    return <span key={index}><svg style = {{fill: "black"}} viewBox="0 0 1000 1000" className = 'stars'><path d={this.star}></path></svg></span>
                })}
                <span className = 'review-count'>{this.state.reviewCount}</span>
              </div>
            </div>
          </div>
          <div className = 'flexbox adjusted-flex-type'>   
            <div className = 'footer-price'>
              <span className = 'price'>${this.state.price}</span><span className = 'night'> /NIGHT</span>
            </div>
            <div style = {{padding: '0 36px'}}>
              <button className = 'book-button' onClick = {this.handleButtonClick}>BOOK</button> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
