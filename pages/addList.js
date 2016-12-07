import React from 'react';

import securePage from '../hocs/securePage.js';

const AddList = () => (
	<div>
		<form action="/rate">
			<p>Upload your KODI mediathek xml:</p>
			<input type="file" name="file" />
			<input type="submit" value="Upload" />
		</form>

		<form action="/rate">
			<p>Upload your movies:</p>
			<textarea name="movieList">One movie per line...</textarea>
			<br />
			<input type="submit" value="Upload" />
		</form>
	</div>
)

export default securePage(AddList);

