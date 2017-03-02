import React from 'react'
import Movie from './MovieItem'

const MovieCompareChooseForm = ({onStart, onNeverSeenIt, movie}) => (
	<div>
		<Movie {...movie} />
		<button type="button"
			disabled="true"
			onClick={onNeverSeenIt}
		>
			Never Seen It
		</button>
		<button type="button"
			onClick={onStart}
		>
			Start
		</button>
	</div>
)

export default MovieCompareChooseForm

