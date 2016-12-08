import React from 'react';

import defaultPage from '../../layouts/defaultPage';

const LogIn = () => (
	<div>
		<form action="/auth/login">
			<p>Login with your email address:</p>
			<input type="email" name="email" placeholder="you@example.com" />
			<input type="submit" value="Log In" />
		</form>
	</div>
)

export default defaultPage(LogIn);

