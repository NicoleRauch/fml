import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

import FilteredMovieList from '../../containers/FilteredMovieList'

describe("FilteredMovieList", () => {
	it('should render self and subcomponents', () => {
		const wrapper = mount(
			<Provider store={store}>
				<FilteredMovieList />
			</Provider>
		);

		expect(wrapper.find('ol').children().length).toBe(3);
	});
});

