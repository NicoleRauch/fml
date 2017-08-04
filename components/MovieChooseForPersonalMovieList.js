import React from 'react'
import * as Actions from '../src/movieCollections/actions';
import MovieCompareChoose from '../components/MovieCompareChoose';

export default class MovieChooseForPersonalMovieList extends React.Component {
	constructor (props) {
		super(props)
		this.dispatch = props.dispatch;
		this.start = this.start.bind(this);
	}

	start({chosenMovie}) {
		this.dispatch(Actions.addMovieToPersonalMovieList(chosenMovie));
	}

	render() {
		return (
			<MovieCompareChoose onStart={this.start} {...this.props}/>
		);
	}
};

