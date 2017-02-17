import React from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

import MovieComparisonProcess from '../components/MovieComparisonProcess';

export class RateApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const { collectionId } = this.props;
		if(collectionId) {
			return (
				<div>
					<p>Rate movies from movie collection {collectionId}:</p>
					<MovieComparisonProcess collectionId={collectionId} {...this.props}/>
				</div>
		   )
		}
		return (
			<div>
				<p>You found a broken link, try to go <Link href='/'>Home</Link>.</p>
			</div>
	   )
	}
};

export default connect(state => state)(RateApp);

