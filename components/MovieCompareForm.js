import React from 'react'
import Movie from './MovieItem'

const MovieCompare = ({onSubmit, movieFromCollection, movieFromPersonalList}) => (
		<div>
			<button type="button"
				name={movieFromPersonalList.id}
				onClick={onSubmit}
			>
				{movieFromPersonalList.title}
			</button>
			<p>vs</p>
			<button type="button"
				name={movieFromCollection.id}
				onClick={onSubmit}
			>
				{movieFromCollection.title}
			</button>
		</div>
)

export default MovieCompare

