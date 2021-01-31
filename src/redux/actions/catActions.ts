import {getCats} from "../../services/api";

export const FETCH_CATS_BEGIN = 'FETCH_CATS_BEGIN';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';
export const FILTER_CATS = 'FILTER_CATS';
export const LOAD_MORE = 'LOAD_MORE';

export const fetchCatsBegin = () => ({
    type: FETCH_CATS_BEGIN
});

export const fetchCatsSuccess = (cats: []) => ({
    type: FETCH_CATS_SUCCESS,
    payload: {cats}
});

export const fetchCatsFailure = (error: Error) => ({
    type: FETCH_CATS_FAILURE,
    payload: {error}
});

export const filterCats = (categoryIds: Array<number>) => ({
    type: FILTER_CATS,
    payload: {categoryIds}
});

export const loadMore = () => ({
    type: LOAD_MORE
});

export const fetchCats = (limit: number, page: number, categoryIds: Array<number>) => {
    return (dispatch: Function) => {
        dispatch(fetchCatsBegin());
        return getCats(limit, page, categoryIds).then(response => {
            dispatch(fetchCatsSuccess(response));
            return response;
        }).catch(error => dispatch(fetchCatsFailure(error)));
    };
}
