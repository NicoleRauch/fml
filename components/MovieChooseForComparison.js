import React from 'react'
import * as Actions from '../actions/';
import MovieCompareChoose from '../components/MovieCompareChoose';

export default class MovieChooseForComparison extends React.Component {
	constructor (props) {
		super(props)
		this.dispatch = props.dispatch;
		this.start = this.start.bind(this);
	}

	start({movieCollection, chosenMovie}) {
		const personalMovieListLength = this.props.rate.personalMovieList.length;
		this.dispatch(Actions.startComparisonProcess({
			movieCollection, chosenMovie, personalMovieListLength
		}));
	}

	render() {
		return (
			<MovieCompareChoose onStart={this.start} {...this.props}/>
		);
	}
};

