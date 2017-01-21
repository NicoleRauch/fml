import React from 'react'
import * as Actions from '../actions/';
import MovieCompareForm from '../components/MovieCompareForm'
import chooseNextMoviesToCompare from '../lib/chooseNextMoviesToCompare'

export default class MovieCompare extends React.Component {
	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
		this.nextMovies = chooseNextMoviesToCompare();
	}

	submit(evt) {
		this.dispatch(Actions.saveComparisonResult({
			movieFromCollection: this.nextMovies.movieFromCollection.id,
			movieFromPersonalList: this.nextMovies.movieFromPersonalList.id,
			won: (evt.target.name === this.nextMovies.movieFromCollection.id)
		}));
	}

	render() {
		return (
			<MovieCompareForm onSubmit={this.submit}
				{...this.nextMovies} />
		);
	}
};

