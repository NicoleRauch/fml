import React from 'react'
import { shallow } from 'enzyme'

import MovieList from '../../components/MovieList'

describe("MovieList", () => {
	it('should render self and subcomponents', () => {
		const props = {
			movies: [
				{id: 1, title: "Matrix"},
				{id: 2, title: "Herr der Ringe"},
				{id: 3, title: "Star Wars"}
			]
		}
		const wrapper = shallow(<MovieList {...props} />)

		expect(wrapper.find('ol').children().length).toBe(props.movies.length);
	});
});

