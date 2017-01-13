import React from 'react';

import securePage from '../layouts/securePage.js';
import MovieCollectionsApp from '../apps/MovieCollections'

import { Provider } from 'react-redux';
import { initStore } from '../store';

class MovieCollectionsPage extends React.Component {
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
		const collections = this.props.movieCollections;
		return (
			<Provider store={this.store}>
				<MovieCollectionsApp />
			</Provider>
		)
	}
}

export default securePage(MovieCollectionsPage);

