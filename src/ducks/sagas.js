import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchTopAnimes, fetchAllAnimes } from "../Api";
import { SEARCH_REQUEST, TOPANIME_REQUEST } from "./types";
import {
	fulfilledTopAnime,
	failedTopAnime,
	fulfilledSearchAnime,
	failedSearchAnime
} from "./actions";

function* getTopAnimesWorker(action) {
	try {
		const data = yield call(fetchTopAnimes);
		let res = data.data.top;
		yield put(fulfilledTopAnime(res));
	} catch (err) {
		yield put(failedTopAnime(err));
	}
}
function* getSearchAnimesWorker(action) {
	try {
		const data = yield call(fetchAllAnimes, action.payload);
		let res = data.data.results;
		yield put(fulfilledSearchAnime(res));
	} catch (err) {
		yield put(failedSearchAnime(err));
	}
}

function* getTopAnimeWatcher() {
	yield takeEvery(TOPANIME_REQUEST, getTopAnimesWorker);
}

function* getSearchAnimesWatcher() {
	yield takeEvery(SEARCH_REQUEST, getSearchAnimesWorker);
}

export default function* rootSaga() {
	yield all([getTopAnimeWatcher(), getSearchAnimesWatcher()]);
}
