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

		const ol = wrapper.find('ol');
		expect(ol.children().length).toBe(1);
		const links = ol.find('li').find('a');
		links.forEach((link) => {
			expect(link.prop('href')).toContain("id=673655561");
		});
	});
});

