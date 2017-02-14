import React from 'react'
import { mount } from 'enzyme'

import PersonalMovieList from '../../components/PersonalMovieList'

describe("PersonalMovieList", () => {
	it('should render self and subcomponents', () => {
		const props = {
			movieCollections: {
				"673655561": {
					name: "Hugo Blurays",
					isLoading: false,
					sort: "title",
					movies: {'1931101123':{title:'Pulp Fiction'}}
				}
			},
			rate: {
				processes: {},
				personalMovieList: ['1931101123'],
				results: [{
					movieFromCollection: '1931101123', // Pulp Fiction
					movieFromPersonalList: undefined,
					won: true
				}]
			}
		};
		const wrapper = mount(<PersonalMovieList {...props} />)

		const movies = wrapper.find('ol').children();
		expect(movies.length).toBe(1);
		movies.forEach((li) => {
			expect(li.text()).toBeDefined();
		});
	});
});
