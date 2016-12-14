import React from 'react';

import defaultPage from './defaultPage.js';

const securePageHoc = Page => class SecurePage extends React.Component {
	static getInitialProps(ctx) {
		console.log("SecurePage.getInitialProps: ", ctx);
        return Page.getInitialProps(ctx)
    }

	render () {
		if(false) {
			// TODO: Implement real login-check
			// TODO: Implement real NotAuthorized-Page
			return <div><p>Not authorized!</p></div>
		}
		return <Page {...this.props}/>
	};
};

export default Page => defaultPage(securePageHoc(Page));

