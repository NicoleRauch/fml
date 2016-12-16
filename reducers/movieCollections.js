import movies from './movies';

export default (state = [], action) => {
	switch(action.type) {
		case 'ADD_MOVIECOLLECTION_WITH_MOVIES_LINE-BY-LINE':
			return state.concat({
				id: hashCode(action.movieCollection.name),
				name: action.movieCollection.name,
				movies: movies([], {
					type: 'ADD_MOVIES_LINE-BY-LINE',
					value: {
						movies: action.movieCollection.movies
					}
				})
			});
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
	return Math.abs(hash);
}
