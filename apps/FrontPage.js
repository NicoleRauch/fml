import React from 'react';
import Link from 'next/link';
import { connect } from "react-redux";

import PersonalMovieList from '../components/PersonalMovieList';

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
					<PersonalMovieList {...this.props} />
				</div>
			</div>
	   )
	}
};

export default connect(state => state)(FrontPageApp);

