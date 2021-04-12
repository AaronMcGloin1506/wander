import * as ActionTypes from './ActionTypes';

export const addTrail = (trailName, author, countyId, provenceId,category, terrain, rating, description) => ({
    type: ActionTypes.ADD_TRAIL,
    payload: {
        trailName: trailName,
        author: author,
        countyId: countyId,
        provenceId: provenceId,
        category: category,
        terrain: terrain,
        rating, rating,
        description: description
    }
})