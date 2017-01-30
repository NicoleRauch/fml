import React from 'react';

import securePage from '../layouts/securePage';
import RateApp from '../apps/Rate';

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
			<Provider store={this.store}>
				<RateApp collectionId={id} {...this.props}/>
			</Provider>
	   )
	}
}

export default securePage(Rate);

