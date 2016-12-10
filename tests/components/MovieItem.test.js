import React from 'react'
import { shallow } from 'enzyme'

import MovieItem from '../../components/MovieItem'

describe("MovieItem", () => {
	it('should render self', () => {
		const props = {
			title: "Matrix"
		}
		const wrapper = shallow(<MovieItem {...props} />)

		expect(wrapper.find('li').text()).toBe(props.title);
	});
});

