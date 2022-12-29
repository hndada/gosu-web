// import { css } from "@emotion/react";
// const style = css``
import styles from "../components/chart-list.module.css";

export default function ChartList({ chartSets, setChartSetIndex }) {
    // return <div css={style}>
    return <div className={styles["chart-list"]}>
        {[...chartSets].map((chart, i) => (
            <div className={styles["chart-item"]} key={i} onClick={(event) => {
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

