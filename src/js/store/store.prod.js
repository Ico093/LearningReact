import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}