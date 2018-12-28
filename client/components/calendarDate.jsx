import React from 'react';


export default class CalendarDate extends React.Component {
    constructor(props) {
        super(props);
    }

    isMiddle() {
        return this.props.chosenDates.slice(1,-1).includes(this.props.number);
    }

    isSelected() {
        return this.props.chosenDates[0] === this.props.number || this.props.chosenDates[this.props.chosenDates.length-1] === this.props.number;
    }

    isAvailable() {
        return this.props.daysAvailable.includes(this.props.number);
    }

    badDay(e) {
        e.preventDefault();
    }

  render() {
    return (
        <div className = 'grid-item'>
            {this.isAvailable() ? 
            <button className = {'calendar-item bold ' + (this.isSelected() ? 'chosen ' : '') + (this.isMiddle() ? 'middle' : '')} onClick = {this.props.populateDate}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            :
            <button className = {'calendar-item grey '} onClick = {this.badDay}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            }
                       
        </div>
    );
  }
}
