import { SignupPage, mapState} from '../SignupPage';
//import {changeSignupname, changePassword, submitSignup} from "../actions"

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    addTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<SignupPage {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('SignupPage', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)

      expect(enzymeWrapper.find('h2').text()).toBe('Register')
      expect(enzymeWrapper.find('label').text()).toBe('First Name')

      const InputProps = enzymeWrapper.find('Input').props()
      expect(InputProps.type).toBe(text)
      expect(InputProps.name).toEqual('firstName')
    })   
  })
})

describe('AddLoginFormContainer', () => {
  describe('mapStateToProps', () => {
    it('should return an object with the login_info', () => {
      // Setup
      const mockState = {
        registration  : true
      };
      const expected = {
        registering  : undefined
      };

      // Execution
      const mappedProps = mapState(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });

//   describe('mapDispatchToProps', () => {
//     it('calls dispatch with an action when handleSubmit is called', () => {
//       // Setup
//       const mockDispatch = jest.fn();
//       const actionToDispatch = changeSignupname("Pranish K");
//       const actionToDispatch2 = changePassword("aaaaaa");
//       const actionToDispatch3 = submitSignup("success");  
//       // Execution
//       const mappedProps = mapDispatchToProps(mockDispatch);
//     //   console.log(mappedProps);
//       mappedProps.onChangeSignupname("Pranish K");
//       mappedProps.onChangePassword("aaaaaa");
//       mappedProps.onSubmitSignup();

//       // Expectaion
//       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch2);
//       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch3);
//     });
//   });
});