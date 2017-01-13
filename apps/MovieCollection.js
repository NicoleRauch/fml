import React from 'react';
import { connect } from "react-redux";

import SortedMovieList from '../components/SortedMovieList.js';

export class MovieCollectionApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		let { collectionId } = this.props;
		const collection = this.props.movieCollections[collectionId];
		return (
			<div>
				<p>All movies of collection {collectionId}:</p>
				<SortedMovieList collection={collection} />
			</div>
	   )
	}
};

export default connect(state => state)(MovieCollectionApp);

