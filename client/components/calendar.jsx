import React from 'react';
import CalendarDate from './calendarDate.jsx';


export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 2,
            days: 31,
            month: 'January',
            year: 2019,
            daysAvailable: [],
            chosenDates: []
        }
        this.chosenStartDates = [];
        this.chosenStartMonth = '';
        this.chosenEndDates = [];
        this.chosenEndMonth = '';
        this.daysBooked = 0;
        this.bothPopulated = false;
        this.dates = [];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.handleDates = this.handleDates.bind(this);
        this.populateDate = this.populateDate.bind(this);
        this.leftArrowClick = this.leftArrowClick.bind(this);
        this.rightArrowClick = this.rightArrowClick.bind(this);
        this.leftArrow = "M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z";
        this.rightArrow = "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z";
    }

    componentDidMount() {
        fetch(`http://localhost:3010/${this.props.id}/bookings`, {
        method: 'GET',
        headers: {'content-type': 'application/json'}})
        .then(response => response.json())
        .then(data => {
            this.dates = JSON.parse(data);
            this.handleDates(this.state.month, this.state.year);
        });
    }

    handleDates(month, year) {
        // Takes in booked dates and updates per current calendar month
        var daysAvailable = [...Array(this.days[this.months.indexOf(month)])].map((i, index) => index + 1);
        var monthIndex = this.months.indexOf(month) + 1;
        var bookingsThisMonth = this.dates.filter(date => {
            return ((date.endMonth === monthIndex && date.endYear === year) || (date.startMonth === monthIndex && date.startYear === year));
        })
        bookingsThisMonth.forEach(booking => {
            daysAvailable = daysAvailable.filter(day => {
                if (booking.startMonth !== monthIndex) {
                    return day >= booking.endDay;
                } else if (booking.endMonth !== monthIndex) {
                    return day < booking.startDay;
                }
                return (day < booking.startDay) || (day >= booking.endDay);
            })
        })
        this.setState({daysAvailable: daysAvailable});
    }

    leftArrowClick(e) {
        e.preventDefault();

        // Update calendar
        var ind = this.months.indexOf(this.state.month) - 1;
        var newYear = this.state.year;
        if (ind === -1) {
            ind = 11;
            newYear = newYear - 1;
        } 
        var start = (this.state.start + 7 * 5 - this.days[ind] ) % 7
        var newMonth = this.months[ind];
        var newDays = this.days[ind];

        //Check for Leap Year
        if (this.state.year % 4 === 0 && ind === 1) {
            newDays = 29;
            start = (this.state.start + 7 * 5 - 29 ) % 7
        }

        // Reset Check-in & Check-out Inputs
        if (this.props.checkIn !== '') {
            if (this.props.checkOut === '') {
                this.props.populateDate('checkIn');
            } else {
                this.bothPopulated = true;
            }
        }

        this.setState({start: start, month: newMonth, year: newYear, days: newDays, chosenDates: []});
        this.handleDates(newMonth, newYear);
    }

    rightArrowClick(e) {
        e.preventDefault();

        // Update calendar
        var ind = this.months.indexOf(this.state.month) + 1;
        var start = (this.state.start + this.days[ind-1]) % 7;
        var newYear = this.state.year;
        if (ind === 12) {
            ind = 0;
            newYear = this.state.year + 1;
        } 
        var newMonth = this.months[ind];
        var newDays = this.days[ind];
        if (this.state.year % 4 === 0) {
            if(ind === 1) {
                newDays = 29;
            } else if (ind === 2) {
                start = (this.state.start + 29) % 7;
            }
        }

        // Reset check-in & check-out inputs
        var checkInDay = Number(this.props.checkIn.split('/')[1]);
        var daysLeft = this.state.daysAvailable.length - this.state.daysAvailable.indexOf(checkInDay);
        var daysRemaining = this.days[this.months.indexOf(this.state.month)] - checkInDay + 1;
        if (daysLeft !== daysRemaining && this.props.checkIn !== '') {
            if (this.props.checkOut === '') {
                this.props.populateDate('checkIn');
            } else {
                this.bothPopulated = true;
            }
        }

        this.setState({start: start, month: newMonth, year: newYear, days: newDays, chosenDates: []});
        this.handleDates(newMonth, newYear);
    }

    populateDate(e) {
        e.preventDefault();
        var checkOutMonth = this.months.indexOf(this.state.month) + 1;
        var dateSelected = e.target.innerText;
        var currentYear = this.state.year;

        var isValidCheckOut = function() {
            var checkInArr = this.props.checkIn.split('/');
            var checkInDay = Number(checkInArr[1]);
            var checkInMonth = Number(checkInArr[0]);
            var checkOutDay = Number(dateSelected);    
            if ((checkInMonth !== checkOutMonth) && checkOutDay === this.state.daysAvailable.indexOf(checkOutDay) + 1) {
                this.daysBooked = checkOutDay + this.days[checkInMonth - 1] - checkInDay;
                return true;
            }
            if ((checkInMonth === checkOutMonth) && (checkOutDay > checkInDay) && ((checkOutDay - checkInDay) === (this.state.daysAvailable.indexOf(checkOutDay) - this.state.daysAvailable.indexOf(checkInDay)))) {
                this.daysBooked = checkOutDay - checkInDay;
                return true;
            }
            return false;
        }
        
        if (dateSelected === 'Clear dates') {
            this.setState({chosenDates: []});
            this.props.populateDate();
        } else if (dateSelected !== '') {
            if (this.props.checkIn !== '' && this.bothPopulated === false) {
                if (isValidCheckOut.call(this)) {
                    this.props.populateDate('checkOut', dateSelected, checkOutMonth, currentYear, this.daysBooked);
                    var num = Number(dateSelected);
                    var dates = [];
                    if (this.state.chosenDates.length === 0) {
                        for (var i = 1; i <= num; i++) {
                            dates.push(i);
                        }
                    } else {
                        for (var i = this.state.chosenDates[0]; i <= num; i++) {
                            dates.push(i);
                        }
                    }
                    this.setState({chosenDates: dates});
                } else {
                    this.setState({chosenDates: [Number(dateSelected)]});
                    this.props.populateDate('checkIn', dateSelected, checkOutMonth, currentYear);
                    this.props.populateDate('checkOut');
                }
            } else {
                this.setState({chosenDates: [Number(dateSelected)]});
                this.props.populateDate('checkIn', dateSelected, checkOutMonth, currentYear);
                this.props.populateDate('checkOut');
            }
        }  
        this.bothPopulated = false;
    }

    render() {
        return (
            <div className = 'calendar-block'>
                <div className = 'flexbox space-around' style={{marginTop: '17px'}}>
                    <button className = 'button-calendar-arrow' onClick = {this.leftArrowClick}>
                        <svg style ={{height: '19px', width: '19px'}} viewBox="0 0 1000 1000"><path d={this.leftArrow}></path></svg>
                    </button>
                    <div style = {{paddingTop: '10px'}}>
                        {this.state.month + ' ' + this.state.year}
                    </div>
                    <button className = 'button-calendar-arrow' onClick = {this.rightArrowClick}>
                        <svg style ={{height: '19px', width: '19px'}} viewBox="0 0 1000 1000"><path d={this.rightArrow}></path></svg>
                    </button>
                </div>
                <div className = 'grid' style = {{margin: '12px 24px'}}>
                    {['Su', 'Mo', 'Tu', 'We', 'Th' ,'Fr', 'Sa'].map((item, index) => {
                        return (
                            <div key = {index} style = {{marginTop: '10px'}}>
                                {item}
                            </div>
                        )
                    })}
                    {[...Array(this.state.days + this.state.start > 35 ? 42 : 35)].map((item, index) => {
                        return (<CalendarDate chosenDates = {this.state.chosenDates} daysAvailable = {this.state.daysAvailable} key = {index} number = {index - this.state.start + 1} days = {this.state.days} populateDate = {this.populateDate}/>)
                    })}               
                </div>
                <div className = 'right-align' style = {{marginRight: '10px'}}>
                    <button onClick = {this.populateDate} className = 'button-close'>Clear dates</button>
                </div>
            </div>
        );
    }
}
