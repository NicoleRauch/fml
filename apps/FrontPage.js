import React from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

import SortedMovieList from '../components/SortedMovieList.js';

export class FrontPageApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const collection = this.props.rate;
		return (
			<div>
				<p>Logged in! <Link href='/movieCollections'>Rate movie collections</Link></p>
				<div>
					<p>Filters: Genre (Action, Drama, etc.), ...</p>
				</div>
				<div>
					<p>Your Movies:</p>
					<SortedMovieList collection={collection}/>
				</div>
			</div>
	   )
	}
};

export default connect(state => state)(FrontPageApp);

