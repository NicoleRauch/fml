import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/CreateMovieCollectionWithInputTextarea'

describe("CreateListWithTextarea", () => {
	it('should dispatch action and redirect on submit', () => {
		const props = {
			dispatch: jest.fn(),
			url: {
				pushTo: jest.fn()
			}
		}
		const wrapper = mount(<Component {...props} />)

		wrapper.find('form').simulate('submit');

		expect(props.dispatch).toHaveBeenCalledTimes(1);
		expect(props.dispatch.mock.calls[0][0]).toBeTruthy();
		expect(props.url.pushTo).toHaveBeenCalledTimes(1);
		expect(props.url.pushTo.mock.calls[0][0]).toContain('/');
	});

});

