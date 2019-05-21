import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Destinations from '../components/Destinations';
import NotFound from '../components/NotFound';
import City from '../components/City';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Destinations} />
				<Route exact path='/city/:id' component={City} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
