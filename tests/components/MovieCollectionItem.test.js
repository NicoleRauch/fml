import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCollectionItem'

describe("MovieCollectionItem", () => {
	const props = {
		id: '12',
		name: 'Abc',
		moviesQuantity: 14,
		dispatch: jest.fn(),
		url: {
			pushTo: jest.fn()
		}
	}
	it('should redirect if rate button is clicked', () => {
		const wrapper = mount(<Component {...props} />)

		const rateButton = wrapper.find('button').first();
		rateButton.simulate('click');

		expect(props.url.pushTo).toHaveBeenCalledTimes(1);
		expect(props.url.pushTo.mock.calls[0][0]).toContain('/');
	});

});

