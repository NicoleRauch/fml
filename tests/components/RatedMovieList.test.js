import React from 'react'
import { mount } from 'enzyme'

import RatedMovieList from '../../components/RatedMovieList'

describe("RatedMovieList", () => {
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
				results: [{
					movieToCompare: '1931101123',
					movieFromRatedList: undefined,
					won: true
				}],
				sort: "title"
			}
		};
		const wrapper = mount(<RatedMovieList {...props} />)

		const movies = wrapper.find('ol').children();
		expect(movies.length).toBe(1);
		movies.forEach((li) => {
			expect(li.text()).toBeDefined();
		});
	});
});

