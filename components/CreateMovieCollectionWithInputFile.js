import React from 'react'
import FormFile from '../components/MovieCollectionFormFile'
import * as Actions from '../reducers/movieCollections';

export default class CreateMovieCollectionWithInputTextarea extends React.Component {

	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
	}

	submit(movieCollection) {
		this.dispatch(Actions.createMovieCollectionByFile(movieCollection));
		this.url.pushTo('/movieCollections');
	}

	render() {
		return (
			<FormFile onSubmit={this.submit} />
		);
	}
};

