import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';
const store = createStore(reducer);

import App from '../../apps/Rate'

describe("RateApp", () => {
	it('should render a go home link without collectionId', () => {
		const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(wrapper.find('a')).toHaveLength(1);
		expect(wrapper.find('a').prop('href')).toBe('/');
	});

	it('should render self+subcomponents, and show one start button', () => {
		const wrapper = mount(
			<Provider store={store}>
				<App collectionId="673655561"/>
			</Provider>
		);
		expect(wrapper.find('button')).toHaveLength(1);
	});
});

