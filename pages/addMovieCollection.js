import React from 'react';

import securePage from '../layouts/securePage';
import WithInputTextfield from '../containers/AddMovieCollectionWithInputTextfield';
import WithInputFile from '../containers/AddMovieCollectionWithFile';

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
			<div>
				<Provider store={this.store}>
					<WithInputFile url={this.props.url}/>
				</Provider>
				<Provider store={this.store}>
					<WithInputTextfield url={this.props.url}/>
				</Provider>
			</div>
	   )
	}
}

export default securePage(AddList);

