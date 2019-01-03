import React from 'react';

export default class CancellationPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {  
        return (
            <div className = 'george-cancellation-policy'>
                <button className = 'george-cancellation-exit' onClick = {this.props.toggleCancellation}><i className="fas fa-chevron-left"></i></button>
                <div className = "george-border-top george-cancellation-policy-text" >
                <div className = 'george-cancellation-flexbox'>
                    <div className = 'george-cancellation-label'>
                    Cancellation policy
                    </div>
                    <div className = 'george-cancellation-text'>
                        <p className = 'george-list-header'  style = {{padding: '0', margin: '0'}}>
                        Moderate cancellation policy
                        </p>   
                        <p>
                            Cancel up to 5 days before check in and get a full refund (minus service fees). 
                            Cancel within 5 days of your trip and the first night is non-refundable, but 50% of the cost for the remaining nights will be refunded. 
                            Service fees are refunded when cancellation happens before check in and within 48 hours of booking.
                        </p>
                    </div>
                </div>
                <div className = 'george-cancellation-flexbox' style = {{marginTop: '52px'}}>
                    <div className = 'george-cancellation-label'>
                    House Rules
                    </div>
                    <div className = 'george-cancellation-text'>
                        <p className = 'george-list-header' style = {{padding: '0', margin: '0'}}>
                        General rules
                        </p>   
                        <p>
                            <ul className = 'george-unstyled-list'>
                                <li>No pets</li>
                                <li>No smoking, parties, or events</li>
                                <li>Check-in is anytime after 4PM and check out by 11AM</li>
                                <li>Self check-in with keypad</li>
                            </ul>
                        </p>
                        <p className = 'george-list-header' style = {{padding: '0', margin: '32px 0 0 0'}}>
                        You must also acknowledge
                        </p>   
                        <p>
                            <ul className = 'george-unstyled-list'>
                                <li>Pet(s) live on property - We have a dog and a cat that live upstairs.</li>
                                <li>Potential for noise - We have done our best to soundproof the living quarters but we do have two young children that you may hear upstairs.</li>
                                <li>Security Deposit - if you damage the home, you may be charged up to $200</li>
                            </ul>
                        </p>
                    </div>
                </div>
                </div>
                
            </div>     
        )
    }
}