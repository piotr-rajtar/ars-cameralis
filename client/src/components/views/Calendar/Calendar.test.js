import React from 'react';
import { shallow } from 'enzyme';
import { CalendarComponent } from './Calendar';

describe('Component Calendar', () => {
  it('should render without crashing', () => {
    const component = shallow(<CalendarComponent />);
    expect(component).toBeTruthy();
  });
});
