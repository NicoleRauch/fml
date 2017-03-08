import React from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

import MovieCollectionList from '../components/MovieCollectionList';

export class MovieCollectionApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				<p><Link href='/'>Back</Link></p>
				<p>List of all Movie Collections:</p>
				<MovieCollectionList {...this.props} />
				<p><Link href='/addMovieCollection'>Add a new movie collection</Link></p>
			</div>
	   )
	}
};

export default connect(state => state)(MovieCollectionApp);

