import React from 'react';
import { shallow, mount } from 'enzyme';

import classy from '../classy';

const componentClass = 'component-class';
const classyClass = 'classy-class-1 classy-class-2';

const Div = props => <div {...props} />;

it('should render string component', () => {
  const ClassyDiv = classy(classyClass)('div');
  let wrapper = shallow(<ClassyDiv />);
  expect(wrapper).toBeDefined();
});

it('should render jsx component', () => {
  const ClassyDiv = classy(classyClass)(Div);
  let wrapper = shallow(<ClassyDiv />);
  expect(wrapper).toBeDefined();
});

it('should include all classes', () => {
  const ClassyDiv = classy(classyClass)(Div);
  let wrapper = shallow(<ClassyDiv className={componentClass} />);
  expect(wrapper).toHaveClassName(classyClass);
  expect(wrapper).toHaveClassName(componentClass);
});
