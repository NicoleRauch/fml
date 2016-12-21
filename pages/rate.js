import React from 'react';

import securePage from '../layouts/securePage';
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
			</div>
	   )
	}
}

export default securePage(Rate);

