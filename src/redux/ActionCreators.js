import * as ActionTypes from './ActionTypes';
import { PROVENCES } from '../shared/provences';
import { COUNTIES } from '../shared/counties';
import { TRAILS } from '../shared/trails';

export const addTrail = (trailName, author, countyId, provenceId,category, terrain, rating, description) => ({
    type: ActionTypes.ADD_TRAIL,
    payload: {
        trailName: trailName,
        author: author,
        countyId: countyId,
        provenceId: provenceId,
        category: category,
        terrain: terrain,
        rating: rating,
        description: description
    }
})

export const fetchProvences = () => (dispatch) => {
    dispatch(provencesLoading(true));

    setTimeout(() => {
        dispatch(addProvences(PROVENCES));
    }, 2000)
}

export const provencesLoading = () => ({
    type: ActionTypes.PROVENCES_LOADING
});

export const provenceFailed = (errmess) => ({
    type: ActionTypes.PROVENCES_FAILED,
    payload: errmess
});

export const addProvences = (provences) => ({
    type: ActionTypes.ADD_PROVENCES,
    payload: provences
});

export const fetchCounties = () => (dispatch) => {
    dispatch(countiesLoading(true));

    setTimeout(() => {
        dispatch(addCounties(COUNTIES));
    }, 2000)
}

export const countiesLoading = () => ({
    type: ActionTypes.COUNTIES_LOADING
});

export const countiesFailed = (errmess) => ({
    type: ActionTypes.COUNTIES_FAILED,
    payload: errmess
});

export const addCounties = (counties) => ({
    type: ActionTypes.ADD_COUNTIES,
    payload: counties
});

export const fetchTrails = () => (dispatch) => {
    dispatch(trailsLoading(true));

    setTimeout(() => {
        dispatch(addTrails(TRAILS));
    }, 2000)
};

export const trailsLoading = () => ({
    type: ActionTypes.TRAILS_LOADING
});

export const trailsFailed = (errmess) => ({
    type: ActionTypes.TRAILS_FAILED,
    payload: errmess 
});

export const addTrails = (trails) => ({
    type: ActionTypes.ADD_TRAILS,
    payload: trails
})