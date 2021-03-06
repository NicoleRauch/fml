import React from 'react';

import defaultPage from './defaultPage.js';

const securePageHoc = Page => class SecurePage extends React.Component {
	static getInitialProps(ctx) {
		return Page.getInitialProps && Page.getInitialProps(ctx);
    }

	render () {
		//if(!this.props.isAuthenticated) {
		if(false) {
			// TODO: Implement real NotAuthorized-Page
			return <div><p>Not authorized!</p></div>
		}
		return <Page {...this.props}/>
	};
};

export default Page => defaultPage(securePageHoc(Page));

