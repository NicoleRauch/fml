import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCompare'

describe("MovieCompare", () => {
	it('should dispatch action', () => {
		const props = {
			dispatch: jest.fn(),
		}
		const wrapper = mount(<Component {...props} />)

		wrapper.find('button').first().simulate('click');

		expect(props.dispatch).toHaveBeenCalledTimes(1);
		expect(props.dispatch.mock.calls[0][0]).toBeTruthy();
	});

});

