import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCollectionItem'

describe("MovieCollectionItem", () => {
	it('should render self and show name and link', () => {
		const props = {
			id: '12',
			name: 'Abc',
			moviesQuantity: 14
		}
		const wrapper = mount(<Component {...props} />)

		expect(wrapper.text()).toContain("Abc");
		const links = wrapper.find("a");
		links.forEach((node) => {
			expect(node.text()).toBeTruthy();
			expect(node.text().length).toBeGreaterThan(0);
		});
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
		expect(wrapper.find("a").isEmpty()).toBe(true);
		expect(wrapper.find("img").isEmpty()).toBe(false);
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
		expect(wrapper.find("a").isEmpty()).toBe(true);
		expect(wrapper.find("img").isEmpty()).toBe(false);
	});

});

