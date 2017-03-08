import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCompare'

describe("MovieCompare", () => {
	const props = {
		collectionId: 42,
		rate: {
			personalMovieList: ['12'],
			process: {
				'42': {
					m: 0,
					movieFromCollection: '11'
				}
			}
		},
		movieCollections: {
			'42': {
				movies: {
					'11': {title:"a"},
					'12': {title:"b"}
				}
			}
		}
	}
	it('should dispatch action if first button is clicked', () => {
		props.dispatch = jest.fn();
		const wrapper = mount(<Component {...props} />)

		const firstButton = wrapper.find('button').first();
		firstButton.simulate('click');

		expect(props.dispatch).toHaveBeenCalledTimes(1);
		const action = props.dispatch.mock.calls[0][0]
		expect(action).toBeTruthy();
		expect(action.id).toBe(42);
		expect(action.payload.comparisonWonByMovieFromCollection).toBe(false);
	});

	it('should dispatch action if second button is clicked', () => {
		props.dispatch = jest.fn();
		const wrapper = mount(<Component {...props} />)

		const secondButton = wrapper.find('button').last();
		secondButton.simulate('click');

		expect(props.dispatch).toHaveBeenCalledTimes(1);
		const action = props.dispatch.mock.calls[0][0]
		expect(action).toBeTruthy();
		expect(action.id).toBe(42);
		expect(action.payload.comparisonWonByMovieFromCollection).toBe(true);
	});

});

