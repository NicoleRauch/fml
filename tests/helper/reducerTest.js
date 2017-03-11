import deepFreeze from 'deep-freeze'

export default (reducer, description, params) => {
	it(description, () => {
		const { stateBefore, action,
				actions, stateAfter, matchObject } = params;

		if(Array.isArray(actions)) {
			const actual = actions.reduce((state, action) => {
				deepFreeze(action);
				return reducer(state, action);
			}, stateBefore);
			expect(actual).toEqual(stateAfter);
			return;
		}

		if(stateBefore) deepFreeze(stateBefore);
		deepFreeze(action);

		if(!matchObject) {
			expect(reducer(stateBefore, action)).toEqual(stateAfter);
		} else {
			expect(reducer(stateBefore, action)).toMatchObject(stateAfter);
		}
	});
};

