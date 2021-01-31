import {FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE} from '../actions/categoryActions';

const initialState = {
    categories: [],
    loading: true,
    error: null
};

const categoryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories
            };

        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        default:
            return state;
    }
}

export default categoryReducer;
