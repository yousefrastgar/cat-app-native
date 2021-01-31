import {getAllCategories} from "../../services/api";

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesSuccess = (categories: []) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {categories}
});

export const fetchCategoriesFailure = (error: Error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: {error}
});

export const fetchCategories = () => {
    return (dispatch: Function) => {
        return getAllCategories().then(response => {
            dispatch(fetchCategoriesSuccess(response));
            return response;
        }).catch(error => dispatch(fetchCategoriesFailure(error)));
    };
}
