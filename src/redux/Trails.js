import * as ActionTypes from './ActionTypes';

export const Trails = (state = {
    isLoading: true,
    errMess: null,
    trails: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TRAIL:
            var trail = action.payload;
            console.log('trail: ', trail )
            return {...state, trails: state.trails.concat(trail)}

        case ActionTypes.TRAILS_LOADING:
            return { ...state, isLoading: true, errMess: null, trails: []}
        
        case ActionTypes.ADD_TRAILS:
            return { ...state, isLoading: false, errMess: null, trails: action.payload}
        
        case ActionTypes.TRAILS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, trails: []}

        default:
            return state;
    }
}