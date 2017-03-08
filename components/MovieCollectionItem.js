import React from 'react'
import * as Actions from '../actions/';
import MovieCollectionItemForm from '../components/MovieCollectionItemForm'

export default class MovieCollectionItem extends React.Component {

	constructor (props) {
		super(props)
		this.url = props.url;
		this.dispatch = props.dispatch;
		this.rate = this.rate.bind(this);
	}

	rate(evt) {
		//this.dispatch(Actions.startComparisonProcess(this.props.id));
		this.url.pushTo('/rate?id='+this.props.id);
	}

	render() {
		return (
			<MovieCollectionItemForm onRate={this.rate}
				{...this.props} />
		);
	}
};

