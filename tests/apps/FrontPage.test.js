import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';
const store = createStore(reducer);

import App from '../../apps/FrontPage'

describe("FrontPageApp", () => {
	it('should render self+subcomponents, and show ordered movie list', () => {
		const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(wrapper.find('ol').children()).toHaveLength(1);
	});
});

