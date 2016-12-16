import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

import MovieCollectionList from '../../containers/MovieCollectionList.js'

describe("MovieCollectionList", () => {
	it('should render self and subcomponents', () => {
		const wrapper = mount(
			<Provider store={store}>
				<MovieCollectionList />
			</Provider>
		);

		expect(wrapper.find('ol').children().length).toBe(0);
	});
});

