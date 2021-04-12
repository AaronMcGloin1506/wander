import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Counties } from './Counties';
import { Provences } from './Provences';
import { Trails } from './Trails';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            counties: Counties,
            provences: Provences,
            trails: Trails
        }), 
        applyMiddleware(thunk, logger)
    );

    return store;
}