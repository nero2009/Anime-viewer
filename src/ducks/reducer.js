import { combineReducers } from "redux";

import * as types from "./types";

export const initialState = {};

const searchResults = (state = [], { type, payload }) => {
	switch (type) {
		case types.SEARCH_SUCCESS:
			return [...payload];
		case types.SEARCH_FAILURE:
			return state;
		default:
			return state;
	}
};

const loadingSearchResults = (state = false, { type, payload }) => {
	switch (type) {
		case types.SEARCH_REQUEST:
			return true;
		case types.SEARCH_SUCCESS:
			return false;
		case types.SEARCH_FAILURE:
			return false;
		default:
			return state;
	}
};

const topAnimes = (state = [], { type, payload }) => {
	switch (type) {
		case types.TOPANIME_SUCCESS:
			return [...payload];
		case types.TOPANIME_FAILURE:
			return state;

		default:
			return state;
	}
};

const loadingTopAnimes = (state = false, { type, payload }) => {
	switch (type) {
		case types.TOPANIME_REQUEST:
			return true;
		case types.TOPANIME_SUCCESS:
			return false;
		case types.TOPANIME_FAILURE:
			return false;
		default:
			return state;
	}
};

// State Selectors
export const getSearchResults = state => state.searchResults;
export const getLoadingSrchResults = state => state.loadingSearchResults;
export const getTopAnimesResults = state => state.topAnimes;
export const getLoadingTopAnimes = state => state.loadingTopAnimes;

export const animeReducer = combineReducers({
	searchResults,
	loadingSearchResults,
	topAnimes,
	loadingTopAnimes
});
