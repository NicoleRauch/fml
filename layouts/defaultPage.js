import React from 'react';
import Head from 'next/head';

export default Page => class DefaultPage extends React.Component {

	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<title>FavoriteMovieList</title>
				</Head>
				<Page />
			</div>
		)
	}
}

