import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';

export default function RouteWrapper({
	component: Component,
	isPrivate,
	...rest
}) {
	const { signed } = store.getState().auth;

	if (!signed && isPrivate) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} render={props => <Component {...props} />} />;
}
