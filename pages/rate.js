import React from 'react';

import securePage from '../layouts/securePage';
import MovieCompare from '../containers/MovieCompare';

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
		let { url: { query: { id } } } = this.props;
		return (
			<div>
				<p>Rate movies from movie collection {id}:</p>
				<Provider store={this.store}>
					<MovieCompare collectionId={id} />
				</Provider>
			</div>
	   )
	}
}

export default securePage(Rate);

