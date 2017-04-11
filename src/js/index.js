import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {loadCourses} from './actions/courseActions';
import App from './components/App';
import '../css/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
