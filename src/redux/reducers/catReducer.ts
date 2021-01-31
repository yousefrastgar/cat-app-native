import {
    FETCH_CATS_BEGIN,
    FETCH_CATS_SUCCESS,
    FILTER_CATS,
    FETCH_CATS_FAILURE,
    LOAD_MORE
} from '../actions/catActions';

const initialState = {
    limit: 9,
    page: 0,
    cats: [],
    categoryIds: [],
    showMore: false,
    loading: true,
    error: null
};

const catReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CATS_BEGIN:
            return {
                ...state,
                loading: true,
                showMore: false,
                error: null
            };

        case FETCH_CATS_SUCCESS:
            return {
                ...state,
                loading: false,
                showMore: action.payload.cats.length === state.limit,
                cats: state.page > 0 ? state.cats.concat(action.payload.cats) : action.payload.cats
            };

        case FETCH_CATS_FAILURE:
            return {
                ...state,
                loading: false,
                showMore: false,
                error: action.payload.error
            };

        case FILTER_CATS:
            return {
                ...state,
                categoryIds: action.payload.categoryIds,
                page: 0,
                cats: []
            };

        case LOAD_MORE:
            return {
                ...state,
                page: state.page + 1
            };

        default:
            return state;
    }
}

export default catReducer;
