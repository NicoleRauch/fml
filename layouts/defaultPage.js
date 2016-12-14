import React from 'react';
import Header from '../components/header';

export default Page => class DefaultPage extends React.Component {

	static getInitialProps(ctx) {
		console.log("DefaultPage.getInitialProps: ", ctx);
        return Page.getInitialProps(ctx)
    }

	render() {
		return (
			<div>
				<Header />
				<Page {...this.props}/>
			</div>
		)
	}
}

