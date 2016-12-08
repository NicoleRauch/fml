import React from 'react';
import Link from 'next/link';

import defaultPage from '../layouts/defaultPage';

const LoggedInDiv = () => (
	<div>
		<p>Logged in! <Link href='/rate'>Rate movie lists</Link></p>
		<div>
			<p>Filters: Genre (Action, Drama, etc.), ...</p>
		</div>
		<div>
			<p>Your Movie List</p>
			<ol>
				<li>Matrix</li>
				<li>Herr der Ringe</li>
				<li>Star Wars</li>
			</ol>
		</div>
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
		<hr />
		<NotLoggedInDiv />
	</div>
)
/*		{isAuthenticated && <LoggedInDiv />}
		{!isAuthenticated && <NotLoggedInDiv />}*/

export default defaultPage(Index);

