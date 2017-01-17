import React from 'react'
import Movie from './MovieItem'

const MovieCompare = ({onSubmit, movieFromList, movieFromCollection}) => (
		<div>
			<p>Is movie</p>
			<p>{movieFromList.title}</p>
			<p>better then</p>
			<p>{movieFromCollection.title}</p>
			<p>
				<button type="button" name="yes" onClick={onSubmit}>Yes</button>
				<button type="button" name="no" onClick={onSubmit}>No</button>
			</p>
		</div>
)

export default MovieCompare

