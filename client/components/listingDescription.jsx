import React from 'react';

export default class ListingDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className = 'george-listing-description george-flexbox george-space-between'>
                <div className = 'george-description'>
                    <div>
                    After a well rested night in the luxurious bed, plan your day in this bright and comfy apartment located on a townhouse’s lower level. 
                    A built-in bench gives way to a dining nook comfortably seating four, and a private entrance provides easy access.
                    </div>
                    <div className = 'george-flexbox george-housing-rooms george-space-between'>
                        <div>
                        4 guests
                        </div>
                        <div>
                        1 bedroom
                        </div>
                        <div>
                        1 bed
                        </div>
                        <div>
                        1 bath
                        </div>
                    </div>
                </div>
                <div className = 'george-host george-flexbox'>
                    <div>
                        <img className = 'george-avatar' src="https://avatars2.githubusercontent.com/u/42251226?s=100&v=4" alt=""/>
                    </div>
                    <div className = 'george-host-text'>
                        <div>
                        “You might never want to get out of bed after a night on our comfy sheets. They're our signature.”
                        </div>
                        <div className = 'george-bold' style={{marginTop:'3em'}}>
                        Paul, your host
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}