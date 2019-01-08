import React from 'react';

export default class Guests extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            adults: 1,
            children: 0,
            infants: 0
        }
        this.handleNumGuestsClick = this.handleNumGuestsClick.bind(this);
    }

    handleNumGuestsClick(e) {
        e.preventDefault()
        var target = e.target.attributes.data.value;
        var curr = this.state[target];
        if (e.target.innerText === '+') {
            if (target !== 'infants' || curr < 5) {
                curr++;
            }
        } else if (curr > 0 && target !== 'adults') {
            curr--;
        } else if (curr > 1) {
            curr--;
        }
        this.setState({[target]: curr})
        if(target === 'adults') {
            this.props.updateNumGuests((curr + this.state.children), this.state.infants);
        } else if (target === 'children') {
            this.props.updateNumGuests((curr + this.state.adults), this.state.infants);
        } else {
            this.props.updateNumGuests((this.state.children + this.state.adults), curr);
        }
    }

    render() {
        return (
            <div className = 'george-guests-block'>
                <div className = 'george-guests-block-info'>
                    <div className = 'george-flexbox george-space-around george-margin-top george-guest-type'>
                        <div className = 'george-label'>Adults</div>
                        <button className = {'george-circle ' + (this.state.adults === 1 ? 'george-opaque' : '')}  data='adults' onClick = {this.handleNumGuestsClick}>-</button>
                        <div className = 'george-sign'>{this.state.adults}</div>
                        <button className = 'george-circle' data='adults' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'george-flexbox george-space-around george-margin-top george-guest-type'>
                        <div className = 'george-label'>
                            <div>Children</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Ages 2-12</div>
                        </div>
                        <button className = {'george-circle ' + (this.state.children === 0 ? 'george-opaque' : '')} data='children' onClick = {this.handleNumGuestsClick}>-</button>
                        <div className = 'george-sign'>{this.state.children}</div>
                        <button className = 'george-circle' data='children' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'george-flexbox george-space-around george-margin-top george-guest-type'>
                        <div className = 'george-label'>
                            <div>Infants</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Under 2</div>
                        </div>
                        <button className = {'george-circle ' + (this.state.infants === 0 ? 'george-opaque' : '')} data='infants' onClick = {this.handleNumGuestsClick} >-</button>
                        <div className = 'george-sign'>{this.state.infants}</div>
                        <button className = {'george-circle ' + (this.state.infants === 5 ? 'george-opaque' : '')} data='infants' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'george-right-align'>
                        <button style = {{marginRight: '10px'}} onClick = {this.props.handleClick} className = 'george-margin-top george-button-close'>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}