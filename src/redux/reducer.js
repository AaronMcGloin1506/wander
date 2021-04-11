import { TRAILS } from '../shared/trails';
import { PROVENCES } from '../shared/provences';
import { COUNTIES } from '../shared/counties' ;

export const initialState = {
    trails: TRAILS,
    provences: PROVENCES,
    counties: COUNTIES
};

export const Reducer = (state = initialState, action) => {
    return state;
};