import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImutableStateInvariant())
    );
}