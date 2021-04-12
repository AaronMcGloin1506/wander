import { actionTypes } from 'react-redux-form';
import { TRAILS } from '../shared/trails';
import * as ActionTypes from './ActionTypes';

export const Trails = (state= TRAILS, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRAIL:
            var trail = action.payload;
            console.log('trail: ', trail )
            return state.concat(trail)
        default:
            return state;
    }
}