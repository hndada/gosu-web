import styles from "./chart-list.module.css"

export default function ChartList({ mode, charts, chartIndex, setChartIndex }) {
    let newCharts = [...charts].filter((chart, i) => {
        if (mode === 0) {
            return chart.Mode === 3 && chart.CS === 4;
        } else if (mode === 1) {
            return chart.Mode === 3 && chart.CS === 7;
        } else if (mode === 2) {
            return chart.Mode === 1;
        }
    })
    newCharts.sort((a, b) => a.DifficultyRating - b.DifficultyRating);

    const playChart = (i) => {
        let chart = charts[i];
        console.log(i, charts)
        window.open('/play', '_blank');
        localStorage.setItem('setID', chart.ParentSetId);
        localStorage.setItem('osuMode', chart.Mode);
        localStorage.setItem('cs', chart.CS);
        localStorage.setItem('osuFile', chart.OsuFile);
        localStorage.setItem('chartName', chart.DiffName)
        localStorage.setItem('downloadPath', chart.DownloadPath);
    }
    return <div className={styles["chart-list"]}>
        {newCharts.map((chart, i) => (
            <div className={styles["chart-item"]} key={i} onClick={(event) => {
                event.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                setChartIndex(i);
                playChart(i);
            }}>
                {chart.DiffName}
                <br />
                Level: {Math.floor(parseLevel(chart.DifficultyRating))}
            </div>
        ))}
    </div >
}
function parseLevel(level) {
    return level < 1 ? 1 : (level - 1) / 0.25 + 2;
    // return Math.floor(Math.pow(level, 1.7));
}

