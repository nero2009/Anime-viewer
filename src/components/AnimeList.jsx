import React from 'react';
import { connect } from 'react-redux'
import styles from './AnimeList.module.css'
import { getSearchResults } from '../ducks/reducer';


const AnimeList = (props) => {
    console.log('anime list animes', props.animes)
    return (
        <section className={styles.listContainer}>
            {
                props.animes.map(anime => {
                    return (
                        <div key={anime.mal_id} className={styles.anime}>
                            <img src={anime.image_url} alt={anime.title} />
                            <div className={styles.overlay}>
                                <p className={styles.title}>{anime.title}</p>
                                <p className={styles.rating}><span>Score:</span> {anime.score}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    animes: getSearchResults(state)
})

export default connect(mapStateToProps)(AnimeList);