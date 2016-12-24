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

	it('should redirect after submit', () => {
		// redirect means call url.pushTo with a non-zero string
		const mockFn = jest.fn();
		const props = {
			url: {
				pushTo: mockFn
			}
		};
		const wrapper = mount(
			<Provider store={store}>
				<Component url={props.url}/>
			</Provider>
		);

		wrapper.find('form').simulate('submit', {
			name: 'Awesome Vol1',
			movies: 'One movie per line...'
		});
		expect(mockFn).toBeCalled();
		// first argument should be a non-zero length string
		// and contain a'/'
		const firstParam = mockFn.mock.calls[0][0];
		expect(firstParam).toBeTruthy();
		expect(firstParam.length).toBeGreaterThan(0);
		expect(firstParam).toContain('/');
	});
});

