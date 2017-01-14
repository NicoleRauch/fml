import React from 'react';

import securePage from '../layouts/securePage';
import AddMovieCollectionApp from '../apps/AddMovieCollection'

import { Provider } from 'react-redux';
import { initStore } from '../store';

class AddList extends React.Component {
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
				<AddMovieCollectionApp {...this.props}/>
			</Provider>
	   )
	}
}

export default securePage(AddList);

