// import { css } from "@emotion/react";
// const style = css``
import styles from "../components/music-list.module.css";

export default function MusicList({ chartSets, setChartSetIndex }) {
    // return <div css={style}>
    return <div className={styles["music-list"]}>
        {[...chartSets].map((chart, i) => (
            <div className={styles["music-item"]} key={i} onClick={(event) => {
                event.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                setChartSetIndex(i);
            }}>
                {chart.Title}
                {/* {chart.DifficultyRating} */}
            </div>
        ))}
    </div>
}

