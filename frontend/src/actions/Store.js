import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export const Store = createStore(
    {},
    compose(
        applyMiddleware(thunk) //for async functions
    )
);