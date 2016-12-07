import React from 'react';
import Link from 'next/link';

import securePage from '../hocs/securePage.js';

const Rate = () => (
	<div>
		<p><Link href='/'>Back</Link></p>
		<p>List of all Movie Lists</p>
		<ul>
			<li>Hugo (author) [100%]</li>
			<li>Datengrab (author) [50% => 20 left]</li>
			<li>Filme (author) [10% => 100 left]</li>
		</ul>
		<p><Link href='/addList'>Add a new list</Link></p>
	</div>
)

export default securePage(Rate);

