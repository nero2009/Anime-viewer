import * as types from "./types";

export const requestSearchAnime = payload => ({
	type: types.SEARCH_REQUEST,
	payload: payload
});

export const fulfilledSearchAnime = payload => ({
	type: types.SEARCH_SUCCESS,
	payload: payload
});

export const failedSearchAnime = payload => ({
	type: types.SEARCH_FAILURE,
	payload: payload
});

export const requestTopAnime = payload => ({
	type: types.TOPANIME_REQUEST,
	payload: payload
});

export const fulfilledTopAnime = payload => ({
	type: types.TOPANIME_SUCCESS,
	payload: payload
});

export const failedTopAnime = payload => ({
	type: types.TOPANIME_FAILURE,
	payload: payload
});
