export const ACTION_TYPES = {
    CREATE: 'CREATE',
    GET_ALL: 'GET_ALL',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

export const getAll = () => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.GET_ALL,
            payload: []
        })    
    }
}