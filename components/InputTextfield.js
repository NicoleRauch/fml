import React from 'react'

export default class InputTextfield extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			movies: 'One movie per line...'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({movies: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>Upload your movies:</p>
				<textarea
					name="movieList"
					value={this.state.movies}
					onChange={this.handleChange}>
				</textarea>
				<br />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

