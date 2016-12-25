import React from 'react'

export default class InputFile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Awesome Vol1',
		};

		this.handleFileSelect = this.handleFileSelect.bind(this);
		this.handleTextinputChange = this.handleTextinputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFileSelect(event) {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			this.setState({content: e.target.result});
			console.log(this.state);
			this.submitButton.disabled = false;
		};
		reader.readAsText(file);
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
				<p>Upload your KODI videodb.xml:</p>
				<p>Name: <input type="text" value={this.state.name} onChange={this.handleTextinputChange}/></p>
				<input type="file" name="file" onChange={this.handleFileSelect} />
				<input type="submit" value="Upload" disabled="true"
					ref={(input) => { this.submitButton = input; }}/>
			</form>
		)
	}
}

