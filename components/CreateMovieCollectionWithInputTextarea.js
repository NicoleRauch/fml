import React from 'react'
import FormTextarea from '../components/MovieCollectionFormTextarea';
import * as Actions from '../reducers/movieCollections';

export default class CreateMovieCollectionWithInputTextarea extends React.Component {

	constructor (props) {
		super(props);
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
	}

	submit(movieCollection) {
		this.dispatch(Actions.addMovieCollectionWithMoviesLineByLine(movieCollection));
		this.url.pushTo('/movieCollections');
	}

	render() {
		return (
			<FormTextarea onSubmit={this.submit} />
		);
	}
};

