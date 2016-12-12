import React from 'react'
import { shallow } from 'enzyme'

import InputTextfield from '../../components/InputTextfield'

describe("InputTextfield", () => {
	it('should render self and subcomponents', () => {
		const props = {
			onSubmit: () => {}
		}
		const wrapper = shallow(<InputTextfield {...props} />)

		expect(wrapper.find('textarea').prop('value')).toBe("One movie per line...");
	});

	it('should call props.onSubmit and preventDefault in event of a submit', () => {
		const props = {
			onSubmit: jest.fn()
		}
		const submitEvent = {
			preventDefault: jest.fn()
		}

		const wrapper = shallow(<InputTextfield {...props} />)
		wrapper.find('form').simulate('submit', submitEvent)

		expect(props.onSubmit).toHaveBeenCalled();
		expect(submitEvent.preventDefault).toHaveBeenCalled();
	});
});

