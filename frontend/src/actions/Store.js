import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers/Index';

const Store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk) //for async functions
    )
);

export default Store;