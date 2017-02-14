import React from 'react'
import { shallow } from 'enzyme'

import MovieCompareForm from '../../components/MovieCompareForm'

describe("MovieCompareForm", () => {
	it('should render self', () => {
		const props = {
			movieFromCollection: { id: '1997372447', title:'Matrix' },
			movieFromPersonalList: { id:'1931101123', title:'Pulp Fiction' }
		}
		const wrapper = shallow(<MovieCompareForm {...props} />)

		expect(wrapper.find('button').children().length).toBe(2);
	});
});

