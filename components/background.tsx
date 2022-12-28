import { css } from "@emotion/react"
// import coverURL from "../components/music-panel";

const style = css`
    position:fixed;
    /* display: flex; */
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    /* transform: translate(-50%, -50%); */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;
    filter: blur(10px) brightness(60%);
    /* z-index: -1; */
`

export default function Background({ chosenChartSetID }) {
    return <div css={style} style={{ backgroundImage: `url(${coverURL(chosenChartSetID, true)})` }} ></div>
}
function coverURL(id, big) {
    // id = 241526
    return `https://assets.ppy.sh/beatmaps/${id}/covers/cover${big ? "@2x" : ""}.jpg`
}