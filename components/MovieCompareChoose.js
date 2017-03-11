import React from 'react'
import * as Actions from '../actions/';
import MovieCompareChooseForm from '../components/MovieCompareChooseForm';
import getUnratedMovieFromCollection from '../lib/getUnratedMovieFromCollection'
import toMovieObject from '../lib/movieIdToMovieObject'

export default class MovieCompareChoose extends React.Component {
	constructor (props) {
		super(props)
		this.dispatch = props.dispatch;
		this.start = this.start.bind(this);
		this.neverSeenIt = this.neverSeenIt.bind(this);
	}

	start(evt) {
		this.props.onStart({
			movieCollection: this.movieCollection,
			chosenMovie: this.movieId
		});
	}

	neverSeenIt(evt) {
		// TODO: append this movie to the unseen list
		// TODO: enable button in the UI
	}

	render() {
		const collectionId = this.props.collectionId;
		this.movieCollection = this.props.movieCollections[collectionId];
		this.personalMovieList = this.props.rate.personalMovieList;
		this.movieId = getUnratedMovieFromCollection(
				this.props.rate.personalMovieList,
				this.movieCollection
		);
		this.movie = toMovieObject(this.movieId, this.props.movieCollections);
		return (
			<MovieCompareChooseForm onStart={this.start}
				onNeverSeenIt={this.neverSeenIt}
				movie={this.movie} />
		);
	}
};

