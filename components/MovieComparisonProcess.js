import React from 'react'
import * as Actions from '../actions/';
import MovieCompare from '../components/MovieCompare'
import MovieCompareStart from '../components/MovieCompareStart'
import MovieCompareFinish from '../components/MovieCompareFinish'

export default class MovieComparisonProcess extends React.Component {
	render() {
		if(typeof this.props.rate.process[this.props.collectionId] === "undefined") {
			return (<MovieCompareStart {...this.props} />);
		} else if(!this.props.rate.process[this.props.collectionId].finished) {
			return (<MovieCompare {...this.props} />);
		} else {
			return (<MovieCompareFinish {...this.props} />);
		}
	}
};

