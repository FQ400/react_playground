import React from 'react';
import { shallow } from 'enzyme';
import { TextField, IntField } from './Form';

describe('TextField', () => {
  it('respects the show mode, which adds the disabled attribute', () => {
    const wrapper = shallow(<TextField edit={false} />);

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });
});

describe('IntField', () => {
  it('respects the show mode, which adds the disabled attribute', () => {
    const wrapper = shallow(<IntField edit={false} />);

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });
});
