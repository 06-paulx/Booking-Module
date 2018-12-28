import React from 'react';
import Guests from './guests.jsx';
import Calendar from './calendar.jsx';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adults: 1,
            calendarShow: 'none',
            checkIn: '',
            checkOut: '',
            children: 0,
            daysBooked: 0,
            guestShow: 'none',
            infants: 0,
            numGuests: '1 guest',
            pricing: [],
            priceCalculatorShow: 'none',
        }
        this.star = "M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z";
        this.arrow = "m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
        this.populateDate = this.populateDate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCalendarClick = this.handleCalendarClick.bind(this);
        this.updateNumGuests = this.updateNumGuests.bind(this);
    }

    calculatePricing(days) {
        var priceArray = [Math.floor(this.props.state.price * days)];
        priceArray.push(Math.min(50,Math.floor(this.props.state.price/20)*10));
        priceArray.push(Math.floor(priceArray[0] * .128));
        priceArray.push(Math.floor((priceArray[0] + priceArray[2])*.14));
        priceArray.push(Math.floor(priceArray[0] + priceArray[1] + priceArray[2] + priceArray[3]));
        this.setState({pricing: priceArray});
    }

    componentDidMount() {
        document.addEventListener('click', this.clickOutside.bind(this), false);
    }

    clickOutside(e) {
        var cal = document.getElementById('calendar');
        var dates = document.getElementById('dates-input');
        if (this.state.calendarShow === 'block' && !cal.contains(e.target) && !dates.contains(e.target)) {
            this.setState({calendarShow: 'none'});
        }
        var guests = document.getElementById('guests-input');
        if (this.state.guestShow === 'block' && !guests.contains(e.target)) {
            this.setState({guestShow: 'none'});
        }
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

    populateDate(status, day, month, year, numDays) {
        if(arguments.length === 0) {
            this.setState({checkIn: '', checkOut: '', daysBooked: 0, priceCalculatorShow: 'none'})
        } else if (arguments.length === 1) {
           this.setState({[status]: '', priceCalculatorShow: 'none'});  
        } else {
            var dd = `0${day}`.slice(-2);
            var mm = `0${month}`.slice(-2);
            var date = `${mm}/${dd}/${year}`;
            if (status === 'checkIn') {
                this.setState({checkIn: date, daysBooked: 0, priceCalculatorShow: 'none'});
            } else {
                this.setState({checkOut: date, daysBooked: numDays, priceCalculatorShow: 'block', calendarShow: 'none'});
                this.calculatePricing(numDays);
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
                <div className = 'margin-top popup-label'>Dates</div>
                <form onSubmit = {this.handleSubmit}>
                    <div className = 'flexbox space-around dates-input' id = 'dates-input'>
                        <input value = {this.state.checkIn} onClick = {this.handleCalendarClick} className = 'check-in' name = 'checkin' type="text" placeholder = 'Check In'/>
                        <div style={{margin: '0 5px', paddingTop: '3px'}}><svg className = 'arrow' viewBox="0 0 24 24"><path d={this.arrow} fillRule="evenodd"></path></svg></div>
                        <input value = {this.state.checkOut} onClick = {this.handleCalendarClick} className = 'check-in' name = 'checkout' type="text" placeholder = 'Check Out'/>
                    </div>
                    <div style = {{display: this.state.calendarShow}} id = 'calendar'>
                        <Calendar checkOut = {this.state.checkOut} checkIn = {this.state.checkIn} id = {this.props.id} populateDate = {this.populateDate}/>
                    </div>
                    <div className = 'margin-top popup-label'>Guests</div>
                    <div  id = 'guests-input' style = {{position: 'relative'}}><input value = {this.state.numGuests} onClick = {this.handleClick} className = 'guests' type="text" name = 'guests' placeholder = '1 Guest'/>
                        <div style = {{display: this.state.guestShow}}>
                            <Guests updateNumGuests = {this.updateNumGuests} handleClick = {this.handleClick} state = {this.state}/>
                        </div>
                    </div>
                    <div style = {{display: this.state.priceCalculatorShow, marginTop: '20px'}}>
                        <div className = 'flexbox space-between pricing'>
                            <div className = 'left-align'>
                                ${this.props.state.price} x {this.state.daysBooked} night{this.state.daysBooked > 1 ? 's' : ''}
                            </div>
                            <div className = 'right-align'>${this.state.pricing[0]}</div>
                        </div>
                        <div className = 'flexbox space-between pricing'>
                            <div className = 'left-align'>
                                Cleaning fee 
                            </div>
                            <div className = 'right-align'>${this.state.pricing[1]}</div>
                        </div>
                        <div className = 'flexbox space-between pricing'>
                            <div className = 'left-align'>
                                Service fee 
                            </div>
                            <div className = 'right-align'>${this.state.pricing[2]}</div>
                        </div>
                        <div className = 'flexbox space-between pricing'>
                            <div className = 'left-align'>
                                Occupancy taxes and fees 
                            </div>
                            <div className = 'right-align'>${this.state.pricing[3]}</div>
                        </div>
                        <div className = 'flexbox space-between pricing' style = {{borderBottomStyle: 'none', fontWeight: 'bold'}}>
                            <div className = 'left-align'>
                                Total 
                            </div>
                            <div className = 'right-align'>${this.state.pricing[4]}</div>
                        </div>
                    </div>
                    <div className = 'popup-book-button center-align'><button style = {{width: '100%'}} className = 'book-button'>BOOK</button></div>
                </form>
                <div className = 'margin-top center-align bottom-text'>You won't be charged yet</div>
            </div>
        </div>
        );
    }
}