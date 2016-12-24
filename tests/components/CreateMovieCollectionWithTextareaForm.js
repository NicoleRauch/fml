import React from 'react'
import { shallow } from 'enzyme'

import Component from '../../components/CreateMovieCollectionWithTextareaForm'

describe("CreateListWithTextarea", () => {
	it('should render self and subcomponents', () => {
		const props = {
			onSubmit: () => {}
		}
		const wrapper = shallow(<Component {...props} />)

		expect(wrapper.find('textarea').prop('value')).toBe("One movie per line...");
	});

	it('should call props.onSubmit and preventDefault in event of a submit', () => {
		const props = {
			onSubmit: jest.fn((value) => {
				expect(value).toEqual({
					name: "Awesome Vol1",
					movies: "One movie per line..."
				});
			})
		}
		const submitEvent = {
			preventDefault: jest.fn()
		}

		const wrapper = shallow(<Component {...props} />)
		wrapper.find('form').simulate('submit', submitEvent)

		expect(props.onSubmit).toHaveBeenCalled();
		expect(submitEvent.preventDefault).toHaveBeenCalled();
	});
});

