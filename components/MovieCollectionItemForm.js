import React from 'react'
import Link from 'next/link';

export default ({ id, name, isLoading, moviesQuantity, onRate}) => (
	/*
	 * Hugo (author) [100%]
	 * Datengrab (author) [50% => 20 left]
	 */
	<li>
		{name} { isLoading && <LoadingMovieCollection moviesQuantity={moviesQuantity}/>} { !isLoading && <AvailableMovieCollection id={id} onRate={onRate}/> }
	</li>
)

const AvailableMovieCollection = ({ id, onRate }) => (
	<span>
		<Link href={'/movieCollection?id='+id}>Show</Link> 
		<button type="button"
			name={id}
			onClick={onRate}
		>
			Rate
		</button>
	</span>
)

const LoadingMovieCollection = ({ moviesQuantity='?' }) => (
	<span>
		<img src="/static/loadingSpinner14x14.gif" alt="Loading Spinner" /> ({moviesQuantity})
	</span>
)

