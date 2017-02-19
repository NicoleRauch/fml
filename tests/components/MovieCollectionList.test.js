import React from 'react'
import { mount } from 'enzyme'

import Component from '../../components/MovieCollectionList'

describe("MovieCollectionList", () => {
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
	it('should render self+sub-components loading or not', () => {
		const wrapper = mount(<Component {...props} />)

		const list = wrapper.find("ol");
		expect(list.children()).toHaveLength(2);
		expect(list.children().at(0).text()).toContain("First");
		expect(list.children().at(1).text()).toContain("Second");
		expect(list.children().at(1).text()).toContain("2");
	});

});

