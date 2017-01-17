import React from 'react'
import MovieCompareForm from '../components/MovieCompareForm'
import * as Actions from '../actions/';

export default class MovieCompare extends React.Component {
	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.submit = this.submit.bind(this);
		this.movieFromList = { id:'1931101123', title:'Pulp Fiction' };
		this.movieFromCollection = { id: '1997372447', title:'Matrix' };
	}

	submit(evt) {
		console.log(evt.target.name);
		this.dispatch(Actions.saveComparisonResult({
			movieFromList: this.movieFromList.id,
			movieFromCollection: this.movieFromCollection.id
		}));
	}

	render() {
		return (
			<MovieCompareForm onSubmit={this.submit}
				movieFromList={this.movieFromList}
				movieFromCollection={this.movieFromCollection} />
		);
	}
};

