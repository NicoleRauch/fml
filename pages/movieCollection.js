import React from 'react';

import securePage from '../layouts/securePage';
import MovieCollectionApp from '../apps/MovieCollection.js';

import { Provider } from 'react-redux';
import { initStore } from '../store';

class MovieCollectionPage extends React.Component {
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
		let { url: { query: { id } } } = this.props;
		return (
			<Provider store={this.store}>
				<MovieCollectionApp collectionId={id} />
			</Provider>
	   )
	}
}

export default securePage(MovieCollectionPage);

