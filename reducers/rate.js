export default (state =
{
	processes: {},
	results: [{
		movieToCompare: '1931101123',
		movieFromRatedList: undefined,
		won: true
	}],
	sort: "title"
}, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

