import { ACTION_TYPES } from '../actions/CandidateActions';

export const CandidateReducer = (state = [], action) => {
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