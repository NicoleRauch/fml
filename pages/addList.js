import React from 'react';

import securePage from '../layouts/securePage';
import AddListInputTextfield from '../containers/AddListInputTextfield';

import { Provider } from 'react-redux';
import { initStore } from '../store';
import reducer from '../reducers';

class AddList extends React.Component {
	static getInitialProps ({ req }) {
		const isServer = !!req;
		const store = initStore(reducer, undefined, isServer);
		return { initialState: store.getState(), isServer }
	}

	constructor (props) {
		super(props)
		this.store = initStore(reducer, props.initialState, props.isServer)
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
					<AddListInputTextfield />
				</Provider>
			</div>
	   )
	}
}

export default securePage(AddList);

