import React from 'react';
import Popup from './popup.jsx';
import CancellationPolicy from './cancellationPolicy.jsx';

export default class Availability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: '',
            price: 0,
            rating: 0,
            reviewCount: 0,
            cancellationPolicy: 'none'
        };
        this.star = "M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z";
        this.componentDidMount = this.componentDidMount.bind(this);
        this.toggleCancellation = this.toggleCancellation.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.minimizePopUp = this.minimizePopUp.bind(this);
        this.updateListings = this.updateListings.bind(this);
    }

    toggleCancellation() {
        if (this.state.cancellationPolicy === 'none') {
            this.setState({cancellationPolicy: 'block'});
        } else {
            this.setState({cancellationPolicy: 'none'});
        }
        
    }

    componentDidMount() {
        this.updateListings();
    }

    handleButtonClick() {
        var cal = document.getElementById('george-block');
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
        fetch(`http://18.219.50.56/${this.props.id}/listings`, {
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
                <div className = 'george-availability george-border-top'>
                    <div style = {{marginBottom: '32px'}}>
                        Availability
                    </div>
                    <div>
                        <button className = 'george-calendar-button' onClick = {this.handleButtonClick}>Show calendar</button>
                    </div>
                </div>
                <div className = 'george-availability george-border-top'>
                    <div style = {{marginBottom: '32px'}}>
                        Cancellation Policy and House Rules
                    </div>
                    <div style = {{marginBottom: '24px'}}>
                        <p>
                            This home has a Moderate cancellation policy. Cancel within 48 hours of booking to get a full refund. 
                        </p>   
                    </div>
                    <div>
                        <button className = 'george-calendar-button' onClick = {this.toggleCancellation}>Read all policies and house rules</button>
                    </div>
                    <div style = {{display: this.state.cancellationPolicy}}>
                        <CancellationPolicy toggleCancellation = {this.toggleCancellation}/>
                    </div>
                </div>
            </div>
            
        )
    }
}