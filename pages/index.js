import React from 'react';
import Link from 'next/link';

import defaultPage from '../layouts/defaultPage';
import FilteredMovieList from '../containers/FilteredMovieList';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

const LoggedInDiv = () => (
	<Provider store={store}>
		<div>
			<p>Logged in! <Link href='/rate'>Rate movie lists</Link></p>
			<div>
				<p>Filters: Genre (Action, Drama, etc.), ...</p>
			</div>
			<div>
				<p>Your Movie List</p>
				<FilteredMovieList />
			</div>
		</div>
	</Provider>
)

const NotLoggedInDiv = () => (
	<div>
		<p>Not logged in! <Link href='/auth/signin'>Proceed to Signin</Link></p>
    </div>
)

const Index = ({ isAuthenticated }) => (
	<div>
		<LoggedInDiv />
		<hr />
		<NotLoggedInDiv />
	</div>
)
/*		{isAuthenticated && <LoggedInDiv />}
		{!isAuthenticated && <NotLoggedInDiv />}*/

export default defaultPage(Index);

