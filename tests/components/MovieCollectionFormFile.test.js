import React from 'react'
import { shallow, mount } from 'enzyme'

import Component from '../../components/MovieCollectionFormFile'

describe("MovieCollectionFormFile", () => {
	it('should render self and subcomponents', () => {
		const props = {
			onSubmit: () => {}
		}
		const wrapper = shallow(<Component {...props} />)

		expect(wrapper.find('[type="file"]')).toBeTruthy();
		expect(wrapper.find('[type="text"]')).toBeTruthy();
		expect(wrapper.find('[type="submit"]')).toBeTruthy();
	});

	it('should call props.onSubmit and preventDefault in event of a submit', () => {
		const props = {
			onSubmit: jest.fn((value) => {
				expect(value).toEqual({
					name: "Awesome Vol1"
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
		const wrapper = mount(<Component />)
		const changedName = "UberAwesomeList";
		const selectedFile = {name: "videodb.xml", size: 42};

		wrapper.find('[type="text"]').simulate('change',
			{target: {value: changedName}}
		);
		wrapper.find('[type="file"]').simulate('change',
			{target: {files: [selectedFile]}}
		);

		expect(wrapper.state('name')).toBe(changedName);
		expect(wrapper.state('file')).toBe(selectedFile);
	});
});

