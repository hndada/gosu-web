import styles from "./chart-list.module.css"
// import styles1 from "./chart-list.module.css"


/* {[...charts].filter((chart, i) => {
if (mode === 0) {
    return chart.Mode === 3 && chart.CS === 4;
} else if (mode === 1) {
    return chart.Mode === 3 && chart.CS === 7;
} else if (mode === 2) {
    return chart.mode === 1;
} */
export default function ChartList({ mode, charts, setChartIndex }) {
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

    // return <div css={style}>
    return <div className={styles["chart-list"]}>
        {newCharts.map((chart, i) => (
            <div className={styles["chart-item"]} key={i} onClick={(event) => {
                event.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                setChartIndex(i);
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

// function ChartItem() {
//     const handleClick = (event) => {
//       event.currentTarget.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center'
//       });
//     };
//     return (
//       <div>
//         {/* The rest of the component goes here */}
//         <div onClick={handleClick}>This element will be scrolled into view</div>
//       </div>
//     );
//   }