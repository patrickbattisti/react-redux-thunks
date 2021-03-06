//types
import { IS_FETCHING, FETCHED, FETCHED_ERROR } from "../actions/app";

//reduces
export function isFetching(state = false, action) {
    switch (action.type) {
        case IS_FETCHING:
            return action.isLoading;
        default:
            return state
    }
}

export function fethcedError(state = {}, action) {
    switch (action.type) {
        case FETCHED_ERROR:
            return action.error;
        default:
            return state
    }
}

export function fetched(state = [], action) {
    switch (action.type) {
        case FETCHED:
            return action.data;
        default:
            return state
    }
}
