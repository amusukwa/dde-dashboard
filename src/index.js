import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
