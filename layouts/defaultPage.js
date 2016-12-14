import React from 'react';
import Header from '../components/header';

export default Page => class DefaultPage extends React.Component {

	static getInitialProps(ctx) {
		if(Page.getInitialProps) {
        	return Page.getInitialProps(ctx)
		}
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

