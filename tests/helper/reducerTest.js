import deepFreeze from 'deep-freeze'

export default (reducer, description, params) => {
	it(description, () => {
		const { stateBefore, action, stateAfter } = params;

		if(stateBefore) deepFreeze(stateBefore);
		deepFreeze(action);

		expect(reducer(stateBefore, action)).toEqual(stateAfter);
	});
};

