import React from 'react'
import MovieCollection from './MovieCollectionItem'

const MovieCollectionList = ({movieCollections}) => (
	<ol>
		{movieCollections.map(movieCollection =>
			<MovieCollection
				key={movieCollection.id}
				{...movieCollection}
			/>
		)}
	</ol>
)

export default MovieCollectionList
