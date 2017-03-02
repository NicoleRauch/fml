import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCollectionList'

describe("MovieCollectionList", () => {
	it('undefined props should render to empty list', () => {
		const wrapper = mount(<Component />)

		const list = wrapper.find("ol");
		expect(list.children()).toHaveLength(0);
	});
	it('empty collections should render to empty list', () => {
		const props = {
			collections: {}
		}
		const wrapper = mount(<Component {...props} />)

		const list = wrapper.find("ol");
		expect(list.children()).toHaveLength(0);
	});
	it('should render self+sub-components loading or not', () => {
		const props = {
			collections: {
				'67887760': {
					name: "First",
					isLoading: false,
					movies: {
						'11': {title:"a"},
						'12': {title:"b"}
					}
				},
				'1822412652': {
					name: "Second",
					isLoading: true,
					movies: {
						'11': {title:"a"},
						'12': {title:"b"}
					}
				}
			}
		}
		const wrapper = mount(<Component {...props} />)

		const list = wrapper.find("ol");
		expect(list.children()).toHaveLength(2);
	});

});

