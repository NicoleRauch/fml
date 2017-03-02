import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCompareChoose'

describe("MovieCompareChoose", () => {
	const props = {
		collectionId: 1992220832,
		rate: {
			personalMovieList: [],
			process: {
				'42': {
					m: 0,
					movieFromCollection: '11'
				}
			}
		},
		movieCollections: {
			'1992220832': {
				name: "BlaBla",
				movies: {
					'11': {title:"a"},
					'12': {title:"b"}
				}
			}
		}
	}
	it('should dispatch action if start button is clicked', () => {
		props.dispatch = jest.fn();
		const wrapper = mount(<Component {...props} />)

		const startButton = wrapper.find('button').at(1);
		startButton.simulate('click');

		expect(props.dispatch).toHaveBeenCalledTimes(1);
		const action = props.dispatch.mock.calls[0][0]
		expect(action).toBeTruthy();
		expect(action.id).toBe(1992220832);
	});

});

