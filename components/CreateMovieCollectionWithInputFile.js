import React from 'react'
import FormFile from '../components/MovieCollectionFormFile'
import * as Actions from '../actions';

export default class CreateMovieCollectionWithInputTextarea extends React.Component {
	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
	}

	submit(movieCollection) {
		this.dispatch(Actions.addMovieCollectionWithMoviesLineByLine(movieCollection));
		this.url.pushTo('/movieCollections');
		this.dispatch(Actions.createMovieCollectionByFile(movieCollection));
		this.url.pushTo('/movieCollections');
	}

	render() {
		return (
			<FormFile onSubmit={this.submit} />
		);
	}
};

