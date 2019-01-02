import Booking from './components/booking.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.jsx'
import Availability from './components/availability.jsx'

var listingId = window.location.pathname.slice(1);

ReactDOM.render(<Booking id = {listingId}/>, document.getElementById('booking'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Availability  id = {listingId}/>, document.getElementById('availability'));