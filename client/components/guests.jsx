import React from 'react';

export default class Guests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'guests-block'>
                <div className = 'guests-block-info'>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>Adults</div>
                        <button className = 'circle'  data='adults' onClick = {this.props.handleNumGuestsClick}>-</button>
                        <div className = 'sign'>{this.props.state.adults}</div>
                        <button className = 'circle' data='adults' onClick = {this.props.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>
                            <div>Children</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Ages 2-12</div>
                        </div>
                        <button className = 'circle' data='children' onClick = {this.props.handleNumGuestsClick}>-</button>
                        <div className = 'sign'>{this.props.state.children}</div>
                        <button className = 'circle' data='children' onClick = {this.props.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'flexbox space-around margin-top guest-type'>
                        <div className = 'label'>
                            <div>Infants</div>
                            <div style={{fontSize: '14px', fontWeight: 'normal'}}>Under 2</div>
                        </div>
                        <button className = 'circle' data='infants' onClick = {this.props.handleNumGuestsClick} >-</button>
                        <div className = 'sign'>{this.props.state.infants}</div>
                        <button className = 'circle' data='infants' onClick = {this.props.handleNumGuestsClick}>+</button>
                    </div>
                    <div className = 'right-align'>
                        <button style = {{marginRight: '10px'}} onClick = {this.props.handleClick} className = 'margin-top button-close'>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}