import React from 'react';
import Link from 'next/link';

import defaultPage from '../layouts/defaultPage';
import FilteredMovieList from '../containers/FilteredMovieList';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import { initStore } from '../store';

const LoggedInDiv = ({ store }) => (
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

class Index extends React.Component {
	static getInitialProps ({ req }) {
		const isServer = !!req;
		const store = initStore(reducer, undefined, isServer);
		return { initialState: store.getState(), isServer }
	}

	constructor (props) {
		super(props)
		this.store = initStore(reducer, props.initialState, props.isServer)
	}

/*		{isAuthenticated && <LoggedInDiv />}
		{!isAuthenticated && <NotLoggedInDiv />}*/
	render() {
		return (
			<div>
				<LoggedInDiv store={this.store}/>
				<hr />
				<NotLoggedInDiv />
			</div>
		)
	}
}

export default defaultPage(Index);

