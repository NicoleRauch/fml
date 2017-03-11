import React from 'react'
import * as Actions from '../actions/';
import MovieCompare from '../components/MovieCompare'
import MovieCompareChoose from '../components/MovieCompareChoose'
import MovieCompareStart from '../components/MovieCompareStart'
import MovieCompareFinish from '../components/MovieCompareFinish'

export default class MovieComparisonProcess extends React.Component {
	render() {
		const rateProcess = this.props.rate.process[this.props.collectionId];
		if(this.props.rate.personalMovieList <= 0
				&& typeof rateProcess.secondMovieFromCollection === "undefined") {
			return (<MovieCompareChoose {...this.props} target="secondMovieFromCollection"/>);
		} else if(!this.props.rate.process[this.props.collectionId].finished) {
			return (<MovieCompare {...this.props} />);
		} else {
			return (<MovieCompareFinish {...this.props} />);
		}
	}
};

