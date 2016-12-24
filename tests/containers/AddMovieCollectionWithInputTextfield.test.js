import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

import Component from '../../containers/AddMovieCollectionWithInputTextfield'

describe("FilteredMovieList", () => {
	it('should render self and subcomponents', () => {
		const wrapper = mount(
			<Provider store={store}>
				<Component />
			</Provider>
		);

		expect(wrapper.children().length).toBeGreaterThan(0);
	});
});

