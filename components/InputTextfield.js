import React from 'react'

export default class InputTextfield extends React.Component {
	
	constructor(props) {
		super(props);
		this.props = props;
		this.movieList = {
			movies: 'One movie per line...'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.movieList.movies = event.target.value;
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(event);
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>Upload your movies:</p>
				<textarea
					name="movieList"
					value={this.movieList.movies}
					onChange={this.handleChange}>
				</textarea>
				<br />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

