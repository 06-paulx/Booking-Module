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
        <div className = 'george-grid-item'>
            {this.isAvailable() ? 
            <button className = {'george-calendar-item george-bold ' + (this.isSelected() ? 'george-chosen ' : '') + (this.isMiddle() ? 'george-middle' : '')} onClick = {this.props.populateDate}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            :
            <button className = {'george-calendar-item george-grey '} onClick = {this.badDay}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            }
                       
        </div>
    );
  }
}
