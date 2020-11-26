import React from 'react';
import { shallow } from 'enzyme';
import { MemberSwiperComponent } from './MemberSwiper';

const slides = [
  {
    id: 1,
    name: 'Slide #1',
    photo: 'Photo #1',
  },
  {
    id: 2,
    name: 'Slide #2',
    photo: 'Photo #2',
  },
];

describe('Component MemberSwiper', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemberSwiperComponent slides={slides} />);
    expect(component).toBeTruthy();
  });
});
