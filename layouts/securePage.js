import React from 'react';

import defaultPage from './defaultPage.js';

const securePageHoc = Page => class SecurePage extends React.Component {
	render () {
		if(false) {
			// TODO: Implement real login-check
			// TODO: Implement real NotAuthorized-Page
			return <div><p>Not authorized!</p></div>
		}
		return <Page />
	};
};

export default Page => defaultPage(securePageHoc(Page));

