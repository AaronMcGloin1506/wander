import {createStore, combineReducers} from 'redux';
import { Counties } from './Counties';
import { Provences } from './Provences';
import { Trails } from './Trails';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            counties: Counties,
            provences: Provences,
            trails: Trails
        })
    );

    return store;
}