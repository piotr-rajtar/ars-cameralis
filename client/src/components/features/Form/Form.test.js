import React from 'react';
import { shallow } from 'enzyme';
import { FormComponent } from './Form';

const formSettings = {
  name: 'name',
  surname: 'surname',
  email: 'test@test.pl',
  message: 'message',
  formSubmit: () => alert('Form submitted'),
  handleChange: () => alert('Change handled'),
};

describe('Component Form', () => {
  it('should render without crashing', () => {
    const component = shallow(<FormComponent
      name={formSettings.name}
      surname={formSettings.surname}
      email={formSettings.email}
      message={formSettings.message}
      formSubmit={formSettings.formSubmit}
      handleChange={formSettings.handleChange}
    />);
    expect(component).toBeTruthy();
  });
});
