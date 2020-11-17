import Api from './Api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    GET_ALL: 'GET_ALL',
    GET_BY_ID: 'GET_BY_ID',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

export const getAll = () => dispatch => {
    Api().getAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err));
}

export const getById = id => dispatch => {
    Api.getById(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_BY_ID,
                payload: response.data
            })
        })
        .catch(err => console.log(err));
}


const formatData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0) //in case of empty field, 0 instead of ''
});

export const create = (data) =>  dispatch => {
    data = formatData(data);
    Api().create(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            })
        })
        .catch(err => console.log(err));
}

export const update = (id, data) => dispatch => {
    data = formatData(data);
    Api().update(id, data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: { id, ...data } //because api return NoContent()
            })
        })
        .catch(err => console.log(err));
}

export const Delete = (id) => dispatch => {
    Api().delete(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: id
            })
        })
        .catch(err => console.log(err));
}