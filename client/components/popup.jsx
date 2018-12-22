import React from 'react';
import Guests from './guests.jsx';
import Calendar from './calendar.jsx';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestShow: 'none',
            numGuests: '1 guest',
            adults: 1,
            children: 0,
            infants: 0,
            calendarShow: 'none',
            checkIn: '',
            checkOut: ''
        }
        this.star = "M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z";
        this.arrow = "m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
        this.populateDate = this.populateDate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCalendarClick = this.handleCalendarClick.bind(this);
        this.handleNumGuestsClick = this.handleNumGuestsClick.bind(this);
        this.updateNumGuests = this.updateNumGuests.bind(this);
    }
 
    handleCalendarClick(e) {
        e.preventDefault();
        if(this.state.calendarShow === 'block') {
            this.setState({calendarShow: 'none'})
        } else {
            this.setState({calendarShow: 'block'})
        }
        if ((this.state.checkIn !== '') && (this.state.checkOut === '')) {
            this.setState({checkIn: '', checkOut: ''})
        }        
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.guestShow === 'none') {
            this.setState({guestShow: 'block'})
        } else {
            this.setState({guestShow: 'none'})
        }
    }

    handleNumGuestsClick(e) {
        e.preventDefault()
        var target = e.target.attributes.data.value;
        var curr = this.state[target];
        if (e.target.innerText === '+') {
            curr++;
        } else if (curr > 0 && target !== 'adults') {
            curr--;
        } else if (curr > 1) {
            curr--;
        }
        this.setState({[target]: curr})
        if(target === 'adults') {
            this.updateNumGuests((curr + this.state.children), this.state.infants);
        } else if (target === 'children') {
            this.updateNumGuests((curr + this.state.adults), this.state.infants);
        } else {
            this.updateNumGuests((this.state.children + this.state.adults), curr);
        }
    }

    populateDate(status, day, month, year) {
        if(arguments.length === 0) {
            this.setState({checkIn: '', checkOut: ''})
        } else if (arguments.length === 1) {
           this.setState({[status]: ''});  
        } else {
            var dd = `0${day}`.slice(-2);
            var mm = `0${month}`.slice(-2);
            var date = `${mm}/${dd}/${year}`;
            if (status === 'checkIn') {
                this.setState({checkIn: date});
            } else {
                this.setState({checkOut: date});
            }
        }
    }

    updateNumGuests(adults,infants) {
        var numGuests = '';
        if (adults === 1) {
            numGuests = '1 guest';
        } else {
            numGuests = `${adults} guests`
        }
        if (infants === 1) {
            numGuests += `, 1 infant`
        } else if (infants > 1) {
            numGuests += `, ${infants} infants`
        }
        this.setState({numGuests: numGuests})
    }

    render() {
        return (
        <div id = 'block'>
            <div id = 'booking-container'>
                <button className = 'exit-button' onClick = {this.props.handleExit}>X</button>
                <span className = 'price'>${this.props.state.price}</span><span className = 'night'> /NIGHT</span>
                <div className = 'flexbox'>
                    {[...Array(5)].map((stars, index) => {
                        if (index < this.props.state.rating) {
                            return <span key={index}><svg viewBox="0 0 1000 1000" className = 'stars'><path d={this.star}></path></svg></span>
                        }
                        return <span key={index}><svg style = {{fill: "black"}} viewBox="0 0 1000 1000" className = 'stars'><path d={this.star}></path></svg></span>
                    })}
                    <span className = 'review-count'>{this.props.state.reviewCount}</span>
                </div>
                <div className = 'spacer'></div>
                <div className = 'margin-top'>Dates</div>
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'flexbox space-around'>
                        <input value = {this.state.checkIn} onClick = {this.handleCalendarClick} className = 'check-in' name = 'checkin' type="text" placeholder = 'Check In'/>
                        <div style={{margin: '0 5px'}}><svg className = 'arrow' viewBox="0 0 24 24"><path d={this.arrow} fillRule="evenodd"></path></svg></div>
                        <input value = {this.state.checkOut} onClick = {this.handleCalendarClick} className = 'check-in' name = 'checkout' type="text" placeholder = 'Check Out'/>
                    </div>
                    <div style = {{display: this.state.calendarShow}}>
                        <Calendar checkOut = {this.state.checkOut} checkIn = {this.state.checkIn} id = {this.props.id} populateDate = {this.populateDate}/>
                    </div>
                    <div className = 'margin-top'>Guests</div>
                    <div style = {{position: 'relative'}}><input value = {this.state.numGuests} onClick = {this.handleClick} className = 'guests' type="text" name = 'guests' placeholder = '1 Guest'/>
                        <div style = {{display: this.state.guestShow}}>
                            <Guests handleNumGuestsClick = {this.handleNumGuestsClick} handleClick = {this.handleClick} state = {this.state}/>
                        </div>
                    </div>
                    <div className = 'popup-book-button center-align'><button style = {{width: '100%'}} className = 'book-button'>BOOK</button></div>
                </form>
                <div className = 'margin-top center-align'>You won't be charged yet</div>
            </div>
        </div>
        );
    }
}