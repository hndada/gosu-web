import styles from "../components/music-panel.module.css";

// style={{css`
//         'position': 'relative';
//         '&::before': {
//             backgroundImage: `url(${coverURL(chosenChartSet.SetId, false)})`;
//         };`
//     }}

// style={{ backgroundImage: `url(${coverURL(chosenChartSet.SetId, false)})` }}
// 오류 무시 가능
export default function MusicPanel({ chosenChartSet }) {
    if (chosenChartSet.ChildrenBeatmaps.length === 0) {
        return null
    }
    let child = chosenChartSet.ChildrenBeatmaps[0];
    return <div className={styles.info} style={{ '--image-url': `url(${coverURL(chosenChartSet.SetId, false)})` }}> 
        <div className={styles["music"]}>
            <div className={styles["music-name"]}>{chosenChartSet.Title}</div>
            <div className={styles["artist-name"]}>{chosenChartSet.Artist}</div>
        </div>
        <div className={styles["chart"]}>
            <div className={styles["chart-name"]}>{child.DiffName}</div>
            <div className={styles["charter-name"]}>{chosenChartSet.Creator}</div>
            <div className={styles["update-date"]}>
                {chosenChartSet.RankedStatus > 0 ? (
                    <div>ranked at {parseDate(chosenChartSet.LastUpdate)}</div>
                ) : (
                    <div>last updated at {parseDate(chosenChartSet.LastUpdate)}</div>
                )}
            </div>
        </div>
        <div className={styles["time"]}>
            <div className={styles["duration"]}>{parseTime(child.TotalLength)}</div>
            <div className={styles["bpm"]}> BPM: {child.BPM}</div>
        </div>
        <div className={styles["level"]}>
            <div className={styles["level-number"]}>Level: {parseLevel(child.DifficultyRating)}</div>
            {/* <div className="note-count"></div> */}
        </div>
    </div>;
}

function parseTime(length) {
    let min = `${Math.floor(length / 60).toString().padStart(2, "0")}`
    let sec = `${Math.floor(length % 60).toString().padStart(2, "0")}`
    return `${min}:${sec}`
}
function parseLevel(level) {
    return Math.floor(Math.pow(level, 1.7));
}
function parseDate(date) {
    return new Date(date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
function coverURL(id, big) {
    return `https://assets.ppy.sh/beatmaps/${id}/covers/cover${big ? "@2x" : ""}.jpg`
}