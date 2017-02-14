import React from 'react'
import { mount } from 'enzyme'

import SortedMovieList from '../../components/SortedMovieList'

describe("SortedMovieList", () => {
	it('should render self and subcomponents', () => {
		const props = {
			collection: {
				movies: {
					'12675280': { title: '96 Hours - Taken 2 (2012)' },
					'12983667': { title: 'Men in Black (1997)' },
					'35474895': { title: 'Moneyball - Die Kunst zu gewinnen' },
					'64976345': { title: 'American Hustle' }
				},
				name: "Awesome Vol1",
				isLoading: false,
				sort: "title",
			}
		}
		const wrapper = mount(<SortedMovieList {...props} />)

		const movies = wrapper.find('ol').children();
		expect(movies.length).toBe(Object.keys(props.collection.movies).length);
		movies.forEach((li) => {
			expect(li.text()).toBeDefined();
		});
	});
});

