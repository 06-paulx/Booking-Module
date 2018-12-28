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
            <div className = 'guests-block'>
                <div className = 'guests-block-info'>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>Adults</div>
                        <button className = {'circle ' + (this.state.adults === 1 ? 'opaque' : '')}  data='adults' onClick = {this.handleNumGuestsClick}>-</button>
                        <div className = 'sign'>{this.state.adults}</div>
                        <button className = 'circle' data='adults' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>
                            <div>Children</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Ages 2-12</div>
                        </div>
                        <button className = {'circle ' + (this.state.children === 0 ? 'opaque' : '')} data='children' onClick = {this.handleNumGuestsClick}>-</button>
                        <div className = 'sign'>{this.state.children}</div>
                        <button className = 'circle' data='children' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>
                            <div>Infants</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Under 2</div>
                        </div>
                        <button className = {'circle ' + (this.state.infants === 0 ? 'opaque' : '')} data='infants' onClick = {this.handleNumGuestsClick} >-</button>
                        <div className = 'sign'>{this.state.infants}</div>
                        <button className = {'circle ' + (this.state.infants === 5 ? 'opaque' : '')} data='infants' onClick = {this.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'right-align'>
                        <button style = {{marginRight: '10px'}} onClick = {this.props.handleClick} className = 'margin-top button-close'>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}