import React from 'react';

import securePage from '../layouts/securePage';

import { Provider } from 'react-redux';
import { initStore } from '../store';

class MovieCollection extends React.Component {
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
				<p>Will soon display the content of movie collection {id}</p>
			</div>
	   )
	}
}

export default securePage(MovieCollection);

