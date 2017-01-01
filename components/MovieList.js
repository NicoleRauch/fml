import React from 'react'
import Movie from './MovieItem'

const MovieList = ({movies}) => (
	<ol>
		{Object.keys(movies).map(movieId =>
			<Movie
				key={movieId}
				id={movieId}
				{...movies[movieId]}
			/>
		)}
	</ol>
)

export default MovieList
