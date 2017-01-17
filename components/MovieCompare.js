import React from 'react'
import MovieCompareForm from '../components/MovieCompareForm'
import * as Actions from '../actions/';

export default class MovieCompare extends React.Component {
	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
		this.movieFromCollection = { id: '1997372447', title:'Matrix' };
		this.movieFromPersonalList = { id:'1931101123', title:'Pulp Fiction' };
	}

	submit(evt) {
		this.dispatch(Actions.saveComparisonResult({
			movieFromCollection: this.movieFromCollection.id,
			movieFromPersonalList: this.movieFromPersonalList.id,
			won: (evt.target.name === this.movieFromCollection.id)
		}));
	}

	render() {
		return (
			<MovieCompareForm onSubmit={this.submit}
				movieFromCollection={this.movieFromCollection}
				movieFromPersonalList={this.movieFromPersonalList} />
		);
	}
};

