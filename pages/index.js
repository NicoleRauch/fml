import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import defaultPage from '../hocs/defaultPage';

const LoggedInDiv = () => (
	<div>
		<p>Logged in! <Link href='/rate'>Rate movie list</Link></p>
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
		<LoggedInDiv />
		<NotLoggedInDiv />
	</div>
)
/*		{isAuthenticated && <LoggedInDiv />}
		{!isAuthenticated && <NotLoggedInDiv />}*/

export default defaultPage(Index);

