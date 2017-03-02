import React from 'react'
import { shallow } from 'enzyme'

import MovieCompareChooseForm from '../../components/MovieCompareChooseForm'

describe("MovieCompareChooseForm", () => {
	it('should render self', () => {
		const wrapper = shallow(<MovieCompareChooseForm />)
		expect(wrapper.find('button').children().length).toBe(2);
	});
});

