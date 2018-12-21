import React from 'react';


export default class CalendarDate extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className = 'grid-item'>
            <button className = 'calendar-item' onClick = {this.props.populateDate}>
                {this.props.number > 0 && this.props.number <= this.props.days ? this.props.number : ''}
            </button>
        </div>
    );
  }
}
