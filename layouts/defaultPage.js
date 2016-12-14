import React from 'react';
import Header from '../components/header';

export default Page => class DefaultPage extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Page {...this.props}/>
			</div>
		)
	}
}

