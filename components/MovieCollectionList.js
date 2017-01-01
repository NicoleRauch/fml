import React from 'react'
import MovieCollection from './MovieCollectionItem'

const MovieCollectionList = ({movieCollections}) => (
	<ol>
		{Object.keys(movieCollections).map(movieCollectionId =>
			<MovieCollection
				key={movieCollectionId}
				id={movieCollectionId}
				{...movieCollections[movieCollectionId]}
			/>
		)}
	</ol>
)

export default MovieCollectionList
