import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

    render() {  
        return (
            <div className = 'george-styled-footer'>
                <div className = 'george-flexbox george-space-between george-styled-footer-list george-border-top'>
                    <div>
                        <ul className = 'george-no-bullets'>
                            <li className = 'george-list-header'>Airbnb</li>
                            <li className = 'george-list-item'>Careers</li>
                            <li className = 'george-list-item'>Press</li>
                            <li className = 'george-list-item'>Policies</li>
                            <li className = 'george-list-item'>Help</li>
                            <li className = 'george-list-item'>Diversity & Belonging</li>
                        </ul>                  
                    </div>
                    <div>
                        <ul className = 'george-no-bullets'>
                            <li className = 'george-list-header'>Discover</li>
                            <li className = 'george-list-item'>Trust & Safety</li>
                            <li className = 'george-list-item'>Invite Friends</li>
                            <li className = 'george-list-item'>Gift Cards</li>
                            <li className = 'george-list-item'>Airbnb Citizen</li>
                            <li className = 'george-list-item'>Business Travel</li>
                            <li className = 'george-list-item'>Guidebooks</li>
                            <li className = 'george-list-item'>Airbnbmag</li>
                            <li className = 'george-list-item'>Events <span className = 'george-new-button'>New</span></li>
                        </ul>     
                    </div>
                    <div>
                        <ul className = 'george-no-bullets'>
                            <li className = 'george-list-header'>Hosting</li>
                            <li className = 'george-list-item'>Why Host</li>
                            <li className = 'george-list-item'>Refer Hosts</li>
                            <li className = 'george-list-item'>Hospitality</li>
                            <li className = 'george-list-item'>Reponsible Hosting</li>
                            <li className = 'george-list-item'>Community Center</li>
                            <li className = 'george-list-item'>Host an Experience <span className = 'george-new-button'>New</span></li>
                            <li className = 'george-list-item'>Open Homes <span className = 'george-new-button'>New</span></li>
                        </ul>     
                    </div>
                    <div>
                        <ul className = 'george-no-bullets'>
                            <li className = 'george-list-header'>
                                <div className = 'george-flexbox george-space-between'>
                                    <a href="https://www.facebook.com/airbnb" target = "_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/airbnb"  target = "_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/airbnb/" target = "_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </li>
                            <li className = 'george-list-item'>Terms</li>
                            <li className = 'george-list-item'>Privary</li>
                            <li className = 'george-list-item'>Site Map</li>
                        </ul>     
                    </div>
                </div>
                <div className = 'george-flexbox george-space-between george-styled-price-type george-border-top'>
                    <div className = 'george-paul-x'>paul-X</div>
                    <div>
                        <button className = 'george-footer-buttons'>English</button>
                        <button className = 'george-footer-buttons'>USD - $</button>
                    </div>
                </div>
            </div>
        )
    }
}