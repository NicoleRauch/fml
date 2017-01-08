import React from 'react'
import Link from 'next/link';

export default ({ id, name, isLoading, moviesQuantity }) => (
	/*
	 * Hugo (author) [100%]
	 * Datengrab (author) [50% => 20 left]
	 */
	<li>
		{name} { isLoading && <LoadingMovieCollection moviesQuantity={moviesQuantity}/>} { !isLoading && <AvailableMovieCollection id={id} /> }
	</li>
)

const AvailableMovieCollection = ({ id }) => (
	<span>
		<Link href={'/movieCollection?id='+id}>Show</Link> <Link href={'/rate?id='+id}>Rate</Link>
	</span>
)

const LoadingMovieCollection = ({ moviesQuantity='?' }) => (
	<span>
		<img src="/static/loadingSpinner14x14.gif" alt="Loading Spinner" /> ({moviesQuantity})
	</span>
)

