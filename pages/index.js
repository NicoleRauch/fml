import React from 'react';
import Link from 'next/link';

import defaultPage from '../layouts/defaultPage';
import FrontPageApp from '../apps/FrontPage';

import { Provider } from 'react-redux';
import { initStore } from '../store';

class Index extends React.Component {
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
			<Provider store={this.store}>
				<FrontPageApp {...this.props}/>
			</Provider>
		)
	}
}

export default defaultPage(Index);

