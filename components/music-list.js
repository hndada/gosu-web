import { css } from "@emotion/react";
import styles from "../components/music-list.module.css";

export default function MusicList({ chartSets, setChartSetIndex }) {
    return <div className={styles["music-list"]}>
        {[...chartSets].map((chartSet, i) => (
            <div className={styles["music-item"]} key={i}
                style={{ '--image-url': `url(${coverURL(chartSet.SetId, false)})` }}
                onClick={(event) => {
                    event.currentTarget.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    setChartSetIndex(i);
                }}>
                <p>{chartSet.Title}</p>
                {/* {chart.DifficultyRating} */}
            </div>
        ))}
    </div>
}

function coverURL(id, big) {
    return `https://assets.ppy.sh/beatmaps/${id}/covers/cover${big ? "@2x" : ""}.jpg`
}
// list: 150x150
// card: 400x140
// cover: 900x250
// slimcover: 1920x360
// Example: https://assets.ppy.sh/beatmaps/784354/covers/slimcover@2x.jpg
// Reference: https://osu.ppy.sh/docs/index.html#beatmapsetcompact-covers