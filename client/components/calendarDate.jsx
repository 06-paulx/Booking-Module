import React from 'react';


export default class CalendarDate extends React.Component {
    constructor(props) {
        super(props);
    }

    badDay(e) {
        e.preventDefault();
    }

  render() {
    return (
        <div className = 'grid-item'>
            {this.props.daysAvailable.includes(this.props.number) 
            ? 
            <button className = 'calendar-item' onClick = {this.props.populateDate}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            :
            <button className = 'calendar-item grey' onClick = {this.badDay}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
            }
           
        </div>
    );
  }
}
