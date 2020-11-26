import React from 'react';
import { shallow } from 'enzyme';
import { PhotoBoxComponent } from './PhotoBox';

describe('Component PhotoBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhotoBoxComponent />);
    expect(component).toBeTruthy();
  });
});
