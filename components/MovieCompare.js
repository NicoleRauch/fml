import React from 'react'
import * as Actions from '../actions/';
import MovieCompareForm from '../components/MovieCompareForm'
import toMovieObject from '../lib/movieIdToMovieObject'

export default class MovieCompare extends React.Component {
	constructor (props) {
		super(props)
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
	}

	submit(evt) {
		this.dispatch(Actions.updateComparisonProcess(this.props.collectionId, {
			comparisonWonByMovieFromCollection:
				(evt.target.name === this.nextMovies.movieFromCollection.id)
		}));
	}

	render() {
		this.process = this.props.rate.process[this.props.collectionId];
		const movieFromCollection = toMovieObject(
				this.process.movieFromCollection,
				this.props.movieCollections
		);
		const movieFromPersonalList = toMovieObject(
				this.props.rate.personalMovieList[this.process.m],
				this.props.movieCollections
		);
		this.nextMovies = {
			movieFromCollection,
			movieFromPersonalList
		};
		return (
			<MovieCompareForm onSubmit={this.submit}
				{...this.nextMovies} />
		);
	}
};

