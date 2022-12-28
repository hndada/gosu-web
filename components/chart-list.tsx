// import { css } from "@emotion/react";
// const style = css``
import styles from "../components/chart-list.module.css";

export default function ChartList({setChosen}) {
    // return <div css={style}>
    return <div className={styles["chart-list"]}>
        {[...Array(20)].map((_, i) => (
            <div className={styles["chart-item"]} key={i} onClick={(event) => {
                event.currentTarget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                setChosen(i);
            }}>
                Item {i + 1}
            </div>
        ))}
    </div>
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