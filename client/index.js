import Booking from './components/booking.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

var listingId = window.location.pathname.slice(1);

ReactDOM.render(<Booking id = {listingId}/>, document.getElementById('booking'));