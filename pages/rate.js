import React from 'react';
import Link from 'next/link';

import securePage from '../layouts/securePage.js';
import MovieCollectionList from '../containers/MovieCollectionList'

import { Provider } from 'react-redux';
import { initStore } from '../store';

class Rate extends React.Component {
	static getInitialProps ({ req }) {
		const isServer = !!req;
		const store = initStore(undefined, isServer);
		return { initialState: store.getState(), isServer }
	}

	constructor (props) {
		super(props)
		this.store = initStore(props.initialState, props.isServer)
	}

	render() {
		return (
			<div>
				<p><Link href='/'>Back</Link></p>
				<p>List of all Movie Collections:</p>
				<Provider store={this.store}>
					<MovieCollectionList />
				</Provider>
				<p><Link href='/addList'>Add a new movie collection</Link></p>
			</div>
		)
	}
}

export default securePage(Rate);

