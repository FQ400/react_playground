import React from 'react';
import { shallow } from 'enzyme';
import { TextField, IntField } from './Form';

describe('TextField', () => {
  test('respects the show mode, which adds the disabled attribute', () => {
    const wrapper = shallow(<TextField edit={false} />);

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

  test('onChange return the current value of the field', () => {
    const value = 'BMW';
    const stub = jest.fn();
    const wrapper = shallow(<TextField edit={true} value={value} onChange={stub}/>);

    wrapper.find('input').simulate('change', { target: { value }});
    expect(stub).toHaveBeenCalledWith(value);
  });

  test('a given value is set', () => {
    const wrapper = shallow(<TextField value={"McLaren"} />);

    expect(wrapper.find('input').prop('value')).toBe("McLaren");
  });

  test('renders a form label containing the prop label', () => {
    const label = 'Hersteller';
    const wrapper = shallow(<TextField label={label} />);

    expect(wrapper.text()).toBe(label);
  });

  test('applies provided className props', () => {
    const wrapper = shallow(<TextField className='valid' />);

    expect(wrapper.find('input').prop('className')).toBe('valid');
  });
});

describe('IntField', () => {
  it('respects the show mode, which adds the disabled attribute', () => {
    const wrapper = shallow(<IntField edit={false} />);

    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });
});
