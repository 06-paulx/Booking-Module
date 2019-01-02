import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

    render() {  
        return (
            <div className = 'styled-footer'>
                <div className = 'flexbox space-between styled-footer-list border-top'>
                    <div>
                        <ul className = 'no-bullets'>
                            <li className = 'list-header'>Airbnb</li>
                            <li className = 'list-item'>Careers</li>
                            <li className = 'list-item'>Press</li>
                            <li className = 'list-item'>Policies</li>
                            <li className = 'list-item'>Help</li>
                            <li className = 'list-item'>Diversity & Belonging</li>
                        </ul>                  
                    </div>
                    <div>
                        <ul className = 'no-bullets'>
                            <li className = 'list-header'>Discover</li>
                            <li className = 'list-item'>Trust & Safety</li>
                            <li className = 'list-item'>Invite Friends</li>
                            <li className = 'list-item'>Gift Cards</li>
                            <li className = 'list-item'>Airbnb Citizen</li>
                            <li className = 'list-item'>Business Travel</li>
                            <li className = 'list-item'>Guidebooks</li>
                            <li className = 'list-item'>Airbnbmag</li>
                            <li className = 'list-item'>Events <span className = 'new-button'>New</span></li>
                        </ul>     
                    </div>
                    <div>
                        <ul className = 'no-bullets'>
                            <li className = 'list-header'>Hosting</li>
                            <li className = 'list-item'>Why Host</li>
                            <li className = 'list-item'>Refer Hosts</li>
                            <li className = 'list-item'>Hospitality</li>
                            <li className = 'list-item'>Reponsible Hosting</li>
                            <li className = 'list-item'>Community Center</li>
                            <li className = 'list-item'>Host an Experience <span className = 'new-button'>New</span></li>
                            <li className = 'list-item'>Open Homes <span className = 'new-button'>New</span></li>
                        </ul>     
                    </div>
                    <div>
                        <ul className = 'no-bullets'>
                            <li className = 'list-header'>
                                <div className ='flexbox space-between'>
                                    <a href="https://www.facebook.com/airbnb" target = "_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/airbnb"  target = "_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/airbnb/" target = "_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </li>
                            <li className = 'list-item'>Terms</li>
                            <li className = 'list-item'>Privary</li>
                            <li className = 'list-item'>Site Map</li>
                        </ul>     
                    </div>
                </div>
                <div className = 'flexbox space-between styled-price-type border-top'>
                    <div className = 'paul-x'>paul-X</div>
                    <div>
                        <button className = 'footer-buttons'>English</button>
                        <button className = 'footer-buttons'>USD - $</button>
                    </div>
                </div>
            </div>
        )
    }
}