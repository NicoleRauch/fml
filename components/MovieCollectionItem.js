import React from 'react'
import Link from 'next/link';

export default ({ id, name, isLoading }) => (
	/*
	 * Hugo (author) [100%]
	 * Datengrab (author) [50% => 20 left]
	 * if it's still loading from file, display spinner like
	 *  (http://spiffygif.com/gif?color=000000&length=2&radius=3&width=1 -> 14x14px)
	 */
	<li>
		{name} { isLoading && <LoadingMovieCollection />} { !isLoading && <AvailableMovieCollection id={id} /> }
	</li>
)

const AvailableMovieCollection = ({ id }) => (
	<span>
		<Link href={'/movieCollection?id='+id}>Show</Link> <Link href={'/rate?id='+id}>Rate</Link>
	</span>
)

const LoadingMovieCollection = () => (
	<img src="/static/loadingSpinner14x14.gif" alt="Loading Spinner" /> 
)
