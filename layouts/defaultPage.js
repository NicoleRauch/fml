import React from 'react';
import Header from '../components/header';

export default Page => class DefaultPage extends React.Component {

	static getInitialProps(ctx) {
		// TODO: Implement real login-check
		const loggedUser = undefined;
		const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
		return {
			...pageProps,
			loggedUser,
			currentUrl: ctx.pathname,
			isAuthenticated: !!loggedUser
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

