import React from 'react';
import { shallow } from 'enzyme';
import { GalleryComponent } from './Gallery';

const photos = [
  {
    id: 1,
    photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/120087878_2496408390658251_6353777256144409988_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=eIv1AqLGcdYAX9Ui4P7&_nc_ht=scontent-waw1-1.xx&oh=68f9e173611cecaecd742596b8a2a6a5&oe=5FD50AFD',
    description: 'Photo 1',
  },
  {
    id: 2,
    photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/119831429_2493004820998608_6692877134328579026_o.jpg?_nc_cat=110&ccb=2&_nc_sid=9267fe&_nc_ohc=zUAiIrl5FWgAX_jamAT&_nc_ht=scontent-waw1-1.xx&oh=29738fcfc9469b462d8c8a82cd559473&oe=5FD1D2DB',
    description: 'Photo 2',
  },
];

describe('Component Gallery', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryComponent photos={photos} />);
    expect(component).toBeTruthy();
  });
});
