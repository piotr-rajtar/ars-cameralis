import React from 'react';
import { shallow } from 'enzyme';
import { RepertoireComponent } from './Repertoire';

describe('Component Repertoire', () => {
  it('should render without crashing', () => {
    const component = shallow(<RepertoireComponent />);
    expect(component).toBeTruthy();
  });
});
