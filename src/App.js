import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import AnimeList from "./components/AnimeList";
import TopAnimes from "./components/TopAnimes";

import styles from "./App.module.css";
import { requestTopAnime, requestSearchAnime } from "./ducks/actions";
import { getTopAnimesResults, getSearchResults } from "./ducks/reducer";

function App(props) {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();

	const fetchQuery = () => {
		dispatch(requestSearchAnime(query));
	};

	useEffect(() => {
		dispatch(requestTopAnime());
		dispatch(requestSearchAnime());
	}, [dispatch]);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}>Anime Viewer</div>
				<nav className={styles.nav}>
					<input
						type="text"
						className={styles.searchField}
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
					<button className={styles.searchBtn} onClick={fetchQuery}>
						Search
					</button>
				</nav>
			</header>
			<main className={styles.content}>
				<AnimeList animes={props.animes} />
				<TopAnimes topAnimes={props.topAnimes} />
			</main>
		</>
	);
}

const mapStateToProps = state => ({
	topAnimes: getTopAnimesResults(state),
	animes: getSearchResults(state)
});

export default connect(mapStateToProps, null)(App);
