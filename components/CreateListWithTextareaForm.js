import React from 'react'

export default class InputTextfield extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Awesome Vol1',
			movies: 'One movie per line...'
		};

		this.handleTextareaChange = this.handleTextareaChange.bind(this);
		this.handleTextinputChange = this.handleTextinputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTextareaChange(event) {
		this.setState({movies: event.target.value});
	}
	handleTextinputChange(event) {
		this.setState({name: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p>Upload your movielist:</p>
				<p>Name: <input type="text" value={this.state.name} onChange={this.handleTextinputChange}/></p>
				<p>Movies:<br />
				<textarea
					value={this.state.movies}
					onChange={this.handleTextareaChange}>
				</textarea>
				</p>
				<p><input type="submit" value="Submit" /></p>
			</form>
		)
	}
}

