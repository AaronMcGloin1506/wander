import * as ActionTypes from './ActionTypes';

export const Provences = (state = {
    isLoading: true,
    errMess: null,
    provences: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROVENCES:
            return {...state, isLoading: false, errMess: null, provences: action.payload}
        
        case ActionTypes.PROVENCES_LOADING:
            return {...state, isLoading: true, errMess: null, provences: []}

        case ActionTypes.PROVENCES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, provences: []}

        default:
            return state;
    }
}