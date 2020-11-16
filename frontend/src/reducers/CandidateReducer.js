import { ACTION_TYPES } from '../actions/CandidateActions';
const initialState = {
    list: []
}

export const CandidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ALL:
            return { 
                ...state,
                list: [...action.payload] 
            }
    
        default:
            return state;
    }
}