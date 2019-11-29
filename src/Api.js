import axios from "axios";
import { baseURL } from "./constants";

export async function fetchTopAnimes() {
	return axios.get(`${baseURL}/top/anime/1/airing`);
}

export async function fetchAllAnimes(query) {
	if (query) {
		return axios.get(`${baseURL}/search/anime/?q=${query}&page=1`);
	} else {
		return axios.get(`${baseURL}/search/anime/?order_by=score&page=1`);
	}
}
