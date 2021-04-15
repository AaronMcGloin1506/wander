import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/bareUrl'

export const addTrail = (comment) => ({
    type: ActionTypes.ADD_TRAIL,
    payload: comment
});

export const postTrail = (trailName, author, countyId, provenceId,category, terrain, rating, description) => (dispatch) => {

    const newTrail = {
    
        trailName: trailName,
        author: author,
        countyId: Number(countyId),
        provenceId: Number(provenceId),
        category: category,
        terrain: terrain,
        rating: rating,
        description: description
        
    }

    return fetch(baseUrl + 'trails', {
        method: 'POST',
        body: JSON.stringify(newTrail),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText) 
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addTrail(response)))
    .catch(error => {   console.log("Post trail", error.message)
                        alert("Your trail could not be posted\n "+ error.message)
                    })

}



export const fetchProvences = () => (dispatch) => {
    dispatch(provencesLoading(true));

    return fetch(baseUrl + 'provences')
        .then(response => {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText) 
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(provences => dispatch(addProvences(provences)))
        .catch(error => dispatch(provenceFailed(error.message)))
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

    return fetch(baseUrl + 'counties')
        .then(response => {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText) 
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(counties => dispatch(addCounties(counties)))
        .catch(error => dispatch(countiesFailed(error.message)))        
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

    return fetch(baseUrl + 'trails')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText) 
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(trails => dispatch(addTrails(trails)))
    .catch(error => dispatch(trailsFailed(error.message)))
        
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