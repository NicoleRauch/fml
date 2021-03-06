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
	it('should call onStart callback if start button is clicked', () => {
		props.onStart = jest.fn();
		const wrapper = mount(<Component {...props} />)

		const startButton = wrapper.find('button').at(1);
		startButton.simulate('click');

		expect(props.onStart).toHaveBeenCalledTimes(1);
		const params = props.onStart.mock.calls[0][0]
		expect(params).toBeTruthy();
		expect(params.chosenMovie).toBe('11');
		expect(params.movieCollection).toEqual({
			name: "BlaBla",
			movies: {
				'11': {title:"a"},
				'12': {title:"b"}
			}
		});
	});

});

