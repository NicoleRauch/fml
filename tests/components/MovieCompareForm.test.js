import React from 'react'
import { shallow } from 'enzyme'

import MovieCompareForm from '../../components/MovieCompareForm'

describe("MovieCompareForm", () => {
	it('should render self', () => {
		const props = {
			movieFromList: {title: "Matrix"},
			movieFromCollection: {title: "Herr der Ringe"}
		}
		const wrapper = shallow(<MovieCompareForm {...props} />)

		expect(wrapper.find('button').children().length).toBe(2);
	});
});

