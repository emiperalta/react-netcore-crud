import api from './Api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    GET_ALL: 'GET_ALL',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

export const getAll = () => dispatch => {
    api.CandidateAPI().getAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err));
}