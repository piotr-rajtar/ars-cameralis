import React from 'react';
import { shallow } from 'enzyme';
import { PageTitleComponent } from './PageTitle';

describe('Component PageTitle', () => {
  it('should render without crashing', () => {
    const component = shallow(<PageTitleComponent pageTitle='Test Title' />);
    expect(component).toBeTruthy();
  });
});
