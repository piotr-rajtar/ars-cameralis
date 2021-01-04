import React from 'react';
import { shallow } from 'enzyme';
import { MessageCounterComponent } from './MessageCounter';

describe('Component MessageCounter', () => {
  it('should render without crashing', () => {
    const component = shallow(<MessageCounterComponent length={500} />);
    expect(component).toBeTruthy();
  });
});
