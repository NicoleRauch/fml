import React from 'react'
import Movie from './MovieItem'

const MovieCompareStart = ({onSubmit, nextMovie}) => (
		<div>
			<Movie {...nextMovie} />
			<button type="button"
				onClick={onSubmit}
			>
				Start
			</button>
		</div>
)

export default MovieCompareStart

