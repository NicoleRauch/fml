import React from 'react'
import Movie from './MovieItem'

const MovieList = ({movies}) => (
	<ol>
		{movies.map(movie =>
			<Movie
				key={movie.id}
				{...movie}
			/>
		)}
	</ol>
)

export default MovieList
