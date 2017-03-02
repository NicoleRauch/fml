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
		this.movieCollection = this.props.movieCollections[this.props.collectionId];
		this.personalMovieList = this.props.rate.personalMovieList;
		this.movieId = getUnratedMovieFromCollection(
				this.props.rate.personalMovieList,
				this.movieCollection
		);
		this.movie = toMovieObject(this.movieId, this.props.movieCollections);
	}

	start(evt) {
		this.dispatch(Actions.addChosenMovieToComparisonProcess({
			movieCollection: this.movieCollection,
			chosenMovie: this.movieId,
			personalMovieListLength: this.personalMovieList.length
		}));
	}

	neverSeenIt(evt) {
		// TODO: append this movie to the unseen list
		// TODO: enable button in the UI
	}

	render() {
		return (
			<MovieCompareChooseForm onStart={this.start}
				onNeverSeenIt={this.neverSeenIt}
				movie={this.movie} />
		);
	}
};

