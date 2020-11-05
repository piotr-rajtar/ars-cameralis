import React from 'react';
import { shallow } from 'enzyme';
import { MembersComponent } from './Members';

describe('Component Members', () => {
  it('should render without crashing', () => {
    const component = shallow(<MembersComponent />);
    expect(component).toBeTruthy();
  });
});
