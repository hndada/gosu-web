import { useEffect, useState } from "react";
import Loading from "../components/loading";
import MusicPanel from "../components/music-panel";
import SearchBox from "../components/search-box";
import MusicList from "../components/music-list";
import Background from "../components/background";
import ModeButton from "@Components/mode-button";
import KeySettings from "@Components/key-settings";
import ChartList from "../components/chart-list";
import PreviewPlayer from "@Components/preview-player";

export default function ChoicePage() {
    const [mode, setMode] = useState<number>(0);

    // const [value, setValue] = useState<any>();
    // const [query, setQuery] = useState<any>();
    const [chartSets, setChartSets] = useState<any>();
    const [chartSetIndex, setChartSetIndex] = useState<number>(0);
    // const [chart, setChart] = useState<any>();
    const [chartIndex, setChartIndex] = useState<number>();
    // const [chosen, setChosen] = useState<number>(0);
    useEffect(() => {
        fetch(`https://api.chimu.moe/v1/search?status=1&amount=100`)
            .then((res) => res.json())
            .then((data) => {
                setChartSets(data["data"])
            });
    }, []);

    useEffect(() => {
        if (!chartSets) { return }
        let chart = chartSets[chartSetIndex].ChildrenBeatmaps[chartIndex];
        window.open('/play', '_blank');
        localStorage.setItem('setID', chart.ParentSetId);
        localStorage.setItem('mode', chart.Mode);
        localStorage.setItem('cs', chart.CS);
        localStorage.setItem('osuFile', chart.OsuFile);
        localStorage.setItem('downloadPath', chart.DownloadPath);
        // playChart({ chart, });
        // 파라미터 전달: chart, keySettings
    }, [chartIndex]);

    if (!chartSets) {
        return <Loading />
    }
    let dogID = 723231;
    let chartSet = chartSets[chartSetIndex];
    let charts = chartSet?.ChildrenBeatmaps;
    // let defaultKeySettingsSet = [
    //     ['d', 'f', 'j', 'k'],
    //     ['s', 'd', 'f', 'Space', 'j', 'k', 'l'],
    //     ['z', 'x', 'c', 'v']]
    return <>
        {chartSetIndex === undefined ?
            <Background chosenChartSetID={dogID} /> :
            <Background chosenChartSetID={chartSet.SetId} />}
        <SearchBox mode={mode} setChartSets={setChartSets} />
        {chartSet != undefined && <MusicPanel chartSet={chartSet} />}
        <PreviewPlayer setID={chartSet.SetId} />
        <MusicList chartSets={chartSets} setChartSetIndex={setChartSetIndex} />
        <ChartList mode={mode} charts={charts} setChartIndex={setChartIndex} />
        <ModeButton mode={mode} setMode={setMode} />
        <KeySettings mode={mode} />
    </>
}



// fetch(`https://api.chimu.moe/v1/d/${setID}`)
//     .then((res) => {
//         return res.arrayBuffer()
//     }).then((res) => res.)


// // First, fetch the Wasm binary and instantiate the module
// fetch('path/to/wasm/module.wasm')
//     .then(response => response.arrayBuffer())
//     .then(bytes => WebAssembly.instantiate(bytes))
//     .then(wasm => {
//         // Once the module is instantiated, you can call its exported functions
//         // using the .exports property of the WebAssembly.Module object
//         const result = wasm.exports.someFunction(arg1, arg2, ...);
//         console.log(result);
//     });

// https://api.chimu.moe/v1/search?query=peppy&amount=100&offset=0&status=0&mode=0&min_cs=0&max_cs=0