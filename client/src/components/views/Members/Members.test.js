import React from 'react';
import { shallow } from 'enzyme';
import { MembersComponent } from './Members';

const conductor = {
  id: 1,
  name: 'Dyrygent',
  photo: 'https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png',
};

const soprano = [
  {
    id: 1,
    name: 'Sopran #1',
    photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
  },
];

const alto  = [
  {
    id: 1,
    name: 'Alt #1',
    photo: 'https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png',
  },
];

const tenor  = [
  {
    id: 1,
    name: 'Tenor #1',
    photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
  },
];

const bass  = [
  {
    id: 1,
    name: 'Bas #1',
    photo: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png',
  },
];


describe('Component Members', () => {
  it('should render without crashing', () => {
    const component = shallow(<MembersComponent conductor={conductor} sopranos={soprano} altos={alto} tenors={tenor} bass={bass} />);
    expect(component).toBeTruthy();
  });
});
