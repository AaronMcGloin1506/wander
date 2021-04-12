import * as ActionTypes from './ActionTypes';
import { PROVENCES } from '../shared/provences';

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