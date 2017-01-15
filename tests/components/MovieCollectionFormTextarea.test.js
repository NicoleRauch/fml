import React from 'react'
import { shallow } from 'enzyme'

import Component from '../../components/MovieCollectionFormTextarea'

describe("CreateListWithTextarea", () => {
	it('should render self and subcomponents', () => {
		const props = {
			onSubmit: () => {}
		}
		const wrapper = shallow(<Component {...props} />)

		expect(wrapper.find('textarea').prop('value')).toBeTruthy();
		expect(wrapper.find('input').last().prop('type')).toBe("submit");
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

	it('should update state on user input', () => {
		const wrapper = shallow(<Component />)
		const changedName = "UberAwesomeList";
		const changedMovies = "Movie1\nMovie2\nMovie3";

		wrapper.find('[type="text"]').simulate('change', {target: {value: changedName}});
		wrapper.find('textarea').simulate('change', {target: {value: changedMovies}});

		expect(wrapper.state('name')).toBe(changedName);
		expect(wrapper.state('movies')).toBe(changedMovies);
	});
});

