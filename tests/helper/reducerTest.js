import deepFreeze from 'deep-freeze'

export default (reducer, description, params) => {
	it(description, () => {
		const { stateBefore, action, actions, stateAfter } = params;

		if(Array.isArray(actions)) {
			const actual = actions.reduce((state, action) => {
				deepFreeze(action);
				return reducer(state, action);
			}, stateBefore);
			expect(actual).toEqual(stateAfter);
		}

		if(stateBefore) deepFreeze(stateBefore);
		deepFreeze(action);

		expect(reducer(stateBefore, action)).toEqual(stateAfter);
	});
};

