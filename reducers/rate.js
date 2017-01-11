export default (state =
{
	processes: {},
	movies: {
		'1931101123': {
			title: 'Pulp Fiction'
		}
	},
	sort: "title"
}, action) => {
	switch(action.type) {
		default:
			return state;
	}
};

