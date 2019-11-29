import React from 'react';
import { connect } from 'react-redux'
import { getTopAnimesResults } from '../ducks/reducer';

import styles from './TopAnimes.module.css'


const TopAnimes = (props) => {

    return (
        <aside>
            <p>
                Top airing anime
            </p>
            <div className={styles.rankContainer}>
                {
                    props.topAnimes.slice(0, 20).map(item => {
                        return (
                            <div className={styles.rankItem} key={item.mal_id}>
                                <img src={item.image_url} alt={item.title} className={styles.rankImage} height='70' width='50' />
                                <div className={styles.rankDetails}>
                                    <p>{item.title}</p>
                                    <p>Episode: {item.episodes}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    );
};

const mapStateToProps = (state) => ({
    topAnimes: getTopAnimesResults(state)
})

export default connect(mapStateToProps)(TopAnimes);