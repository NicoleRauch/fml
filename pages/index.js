import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import defaultPage from '../hocs/defaultPage';

const LoggedInDiv = () => (
	<div>
		Logged in!
    </div>
)

const NotLoggedInDiv = () => (
	<div>
		<p>Not logged in! <Link href='/auth/signin'>Proceed to Signin</Link></p>
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

