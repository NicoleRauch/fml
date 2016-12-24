import React from 'react';

import securePage from '../layouts/securePage';
import WithInputTextfield from '../containers/AddMovieCollectionWithInputTextfield.js';

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
				<form action="/rate">
					<p>Upload your KODI mediathek xml:</p>
					<input type="file" name="file" />
					<input type="submit" value="Upload" />
				</form>

				<Provider store={this.store}>
					<WithInputTextfield url={this.props.url}/>
				</Provider>
			</div>
	   )
	}
}

export default securePage(AddList);

