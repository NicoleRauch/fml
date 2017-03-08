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
		expect(wrapper.find('button').first().text()).toBe("Pulp Fiction");
		expect(wrapper.find('button').last().text()).toBe("Matrix");
	});
});

