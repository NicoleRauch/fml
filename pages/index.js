import React from 'react';
import Head from 'next/head';

import defaultPage from '../hocs/defaultPage';

const LoggedInDiv = () => (
	<div>
		Logged in!
    </div>
)

const NotLoggedInDiv = () => (
	<div>
		Not logged in!
    </div>
)

const Index = ({ isAuthenticated }) => (
	<div>
		<p>Hello world!</p>
		{isAuthenticated && <LoggedInDiv />}
		{!isAuthenticated && <NotLoggedInDiv />}
	</div>
)

export default defaultPage(Index);

