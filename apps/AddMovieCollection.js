import React from 'react';
import { connect } from "react-redux";

import WithInputFile from '../components/CreateMovieCollectionWithInputFile';
import WithInputTextarea from '../components/CreateMovieCollectionWithInputTextarea';

export class AddMovieCollectionApp extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				<WithInputFile {...this.props}/>
				<WithInputTextarea {...this.props}/>
			</div>
	   )
	}
};

export default connect(state => state)(AddMovieCollectionApp);

