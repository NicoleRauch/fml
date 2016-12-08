import React from 'react';
import Header from '../components/header';

export default Page => class DefaultPage extends React.Component {

	constructor (props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Header />
				<Page />
			</div>
		)
	}
}

