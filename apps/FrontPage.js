import React from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

import RatedMovieList from '../components/RatedMovieList.js';

export class FrontPageApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				<p>Logged in! <Link href='/movieCollections'>Rate movie collections</Link></p>
				<div>
					<p>Filters: Genre (Action, Drama, etc.), ...</p>
				</div>
				<div>
					<p>Your Movies:</p>
					<RatedMovieList {...this.props} />
				</div>
			</div>
	   )
	}
};

export default connect(state => state)(FrontPageApp);

