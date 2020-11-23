import React from 'react';
import { shallow } from 'enzyme';
import { PageSubtitleComponent } from './PageSubtitle';

describe('Component PageSubtitle', () => {
  it('should render without crashing', () => {
    const component = shallow(<PageSubtitleComponent>Text</PageSubtitleComponent>);
    expect(component).toBeTruthy();
  });
});
