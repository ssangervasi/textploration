import React from 'react';
import { shallow, mount } from 'enzyme';

import subscribeToProp, { Subject } from '../SubscribeToProp';

const propName = 'propToTest';
const componentId = 'ComponentToTest-propToTest';
let ComponentToTest;
let SubscribedComponentToTest;
let inputSubject;

beforeEach(() => {
  inputSubject = new Subject();

  ComponentToTest = function ComponentToTest({ propToTest }) {
    return <span id={componentId}>{propToTest}</span>;
  };

  SubscribedComponentToTest = subscribeToProp({
    prop: propName,
    subject: inputSubject,
  })(ComponentToTest);
});

it('should include original component name in display name', () => {
  expect(SubscribedComponentToTest.displayName).toContain('ComponentToTest');
});

it('should render', () => {
  let wrapper = shallow(<SubscribedComponentToTest />);
  expect(wrapper).toBeDefined();
});

it('receive published prop', () => {
  let wrapper = mount(<SubscribedComponentToTest />).find(ComponentToTest);
  expect(wrapper).toHaveProp(propName, undefined);
  inputSubject.publish('last value');
  expect(wrapper).toHaveProp(propName, 'last value');
});
