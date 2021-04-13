import * as ActionTypes from './ActionTypes';

export const Counties = (state = {
    isLoading: true,
    errMess: null,
    counties: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COUNTIES:
            return {...state, isLoading:false, errMess: null, counties: action.payload}

        case ActionTypes.COUNTIES_LOADING:
            return {...state, isLoading: true, errMess: null, counties: []}

        case ActionTypes.COUNTIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, counties:[]}

        default:
            return state;
    }
}

