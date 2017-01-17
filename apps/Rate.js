import React from 'react';
import { connect } from "react-redux";

import MovieCompare from '../components/MovieCompare';

export class RateApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const { collectionId } = this.props;
		return (
			<div>
				<p>Rate movies from movie collection {collectionId}:</p>
				<MovieCompare collectionId={collectionId} {...this.props}/>
			</div>
	   )
	}
};

export default connect(state => state)(RateApp);

