import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Booking from '../client/index.js';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Booking component ', () => {
  test('renders', () => {
    const wrapper = shallow(<Booking />);
    expect(wrapper.exists()).toBe(true);
  })
})