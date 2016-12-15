const movie = (state, action) => {
	switch(action.type) {
		case 'ADD_MOVIE':
			return {
				id: hashCode(action.title),
				title: action.title
			};
		default:
			return state;
	}
};

export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_MOVIES_LINE-BY-LINE':
			return state.concat(action.value.movies
				.split("\n")
				.map((movieName) => movie(undefined, {
					type: 'ADD_MOVIE',
					title: movieName
				})));
		default:
			return state;
	}
};

const hashCode = (titleString) => {
	let hash = 0, length = titleString.length;
	if (length == 0) return hash;
	for (let i = 0; i < length; i++) {
		let character = titleString.charCodeAt(i);
		hash = ((hash<<5)-hash)+character;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}

