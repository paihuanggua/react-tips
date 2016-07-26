require('./style/index.css');

import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './containers/App';
import {getAllTabs} from './actions';


const middleware=[ thunk];
const store=createStore(
	reducer,
	applyMiddleware(...middleware)
)

store.dispatch(getAllTabs());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);






























