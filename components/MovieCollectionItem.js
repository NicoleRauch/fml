import React from 'react'
import Link from 'next/link';

export default ({ id, name }) => (
	/*
	 * Hugo (author) [100%]
	 * Datengrab (author) [50% => 20 left]
	 */
	<li>
		{name} <Link href={'/movieCollection?id='+id}>Show</Link>
	</li>
)

