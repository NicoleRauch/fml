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
				{
					this.props.rate.personalMovieList.length > 0 &&
					<div>
						<div>
							<p>Filters: Genre (Action, Drama, etc.), ...</p>
						</div>
						<div>
							<p>Your Movies:</p>
							<PersonalMovieList {...this.props} />
						</div>
						<p><Link href='/movieCollections'>Rate more</Link></p>
					</div>
				}
				{
					this.props.rate.personalMovieList.length <= 0 &&
					<div>
						<p>Start by choosing a <Link href='/movieCollections'>Movie Collection</Link> to rate movies.</p>
						<p><Link href='/auth/signin'>Login</Link> to sync your progress across devices.</p>
					</div>
				}
			</div>
	   )
	}
};

export default connect(state => state)(FrontPageApp);

