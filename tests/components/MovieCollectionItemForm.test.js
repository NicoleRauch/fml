import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCollectionItemForm'

describe("MovieCollectionItemForm", () => {
	it('should render self and show name, link and button', () => {
		const props = {
			id: '12',
			name: 'Abc',
			moviesQuantity: 14
		}
		const wrapper = mount(<Component {...props} />)

		expect(wrapper.text()).toContain("Abc");
		const link = wrapper.find("a").first();
		expect(link.text()).toBeTruthy();
		expect(link.text().length).toBeGreaterThan(0);
		const button = wrapper.find("button").first();
		expect(button.text()).toBeTruthy();
		expect(button.text().length).toBeGreaterThan(0);
	});
	
	it('if loading should render self and show name, "?" and image', () => {
		const props = {
			id: '12',
			name: 'Abc',
			isLoading: true
		}
		const wrapper = mount(<Component {...props} />)

		expect(wrapper.text()).toContain("Abc");
		expect(wrapper.text()).toContain("?");
		expect(wrapper.find("a").exists()).toBe(false);
		expect(wrapper.find("img").exists()).toBe(true);
	});
	it('if loading with quantity should render self and show name, moviesQuantity and image', () => {
		const props = {
			id: '12',
			name: 'Abc',
			moviesQuantity: 14,
			isLoading: true
		}
		const wrapper = mount(<Component {...props} />)

		expect(wrapper.text()).toContain("Abc");
		expect(wrapper.text()).toContain("14");
		expect(wrapper.find("a").exists()).toBe(false);
		expect(wrapper.find("img").exists()).toBe(true);
	});

});

