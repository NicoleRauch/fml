import React from 'react'
import Link from 'next/link';
import * as Actions from '../actions/';
import MovieCompare from '../components/MovieCompare'
import MovieChooseForPersonalList from '../components/MovieChooseForPersonalMovieList'
import MovieChooseForComparison from '../components/MovieChooseForComparison'
import MovieCompareFinish from '../components/MovieCompareFinish'

export default class MovieComparisonProcess extends React.Component {
	render() {
		const rateProcess = this.props.rate.process[this.props.collectionId];
		if(typeof rateProcess === "undefined") {
			return (
				<div>
					<p>You found a broken link, try to go <Link href='/'>Home</Link>.</p>
				</div>
			);
		} else if(this.props.rate.personalMovieList <= 0) {
			return (<MovieChooseForPersonalList {...this.props} />);
		} else if(typeof rateProcess.movieFromCollection === "undefined") {
			return (<MovieChooseForComparison {...this.props} />);
		} else if(!this.props.rate.process[this.props.collectionId].finished) {
			return (<MovieCompare {...this.props} />);
		} else {
			return (<MovieCompareFinish {...this.props} />);
		}
	}
};

