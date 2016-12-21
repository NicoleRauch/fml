import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

import MovieList from '../../containers/MovieCollectionSpecificMovieList'

describe("MovieCollectionList", () => {
	it('should render self and subcomponents', () => {
		const wrapper = mount(
			<Provider store={store}>
				<MovieList collectionId="673655561" />
			</Provider>
		);

		const movies = wrapper.find('ol').children();
		expect(movies.length).toBe(136);
		movies.forEach((li) => {
			expect(li.text()).toBeDefined();
		});
	});
});

