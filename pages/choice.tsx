import { useEffect, useState } from "react";
import Loading from "../components/loading";
import MusicPanel from "../components/music-panel";
import SearchBox from "../components/search-box";
import ChartList from "../components/chart-list";
import Background from "../components/background";
import ModeButton from "@Components/mode-button";
import AudioPlayer from "@Components/audio-player";
// import ChartItem2 from "@Components/chart-list2";
import ChartList2 from "@Components/chart-list2";
import KeySettings from "@Components/key-settings";

export default function ChoicePage() {
    const [mode, setMode] = useState<number>(0);

    // const [value, setValue] = useState<any>();
    // const [query, setQuery] = useState<any>();
    const [chartSets, setChartSets] = useState<any>();
    const [chartSetIndex, setChartSetIndex] = useState<number>(0);
    const [chart, setChart] = useState<any>();
    const [chartIndex, setChartIndex] = useState<number>();
    // const [chosen, setChosen] = useState<number>(0);
    useEffect(() => {
        fetch(`https://api.chimu.moe/v1/search?query=${""}`)
            .then((res) => res.json())
            .then((data) => {
                setChartSets(data["data"])
            });
    }, []
    )
    if (!chartSets) {
        return <Loading />
    }
    let dogID = 723231;
    let chartSet = chartSets[chartSetIndex];
    let charts = chartSet?.ChildrenBeatmaps;
    let defaultKeySettingsSet = [
        ['d', 'f', 'j', 'k'],
        ['s', 'd', 'f', 'Space', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v']]
    return <>
        {chartSetIndex === undefined ?
            <Background chosenChartSetID={dogID} /> :
            <Background chosenChartSetID={chartSet.SetId} />}
        <SearchBox mode={mode} setChartSets={setChartSets} />
        {chartSet != undefined && <MusicPanel chartSet={chartSet} />}
        <AudioPlayer setID={chartSet.SetId} />
        <ChartList chartSets={chartSets} setChartSetIndex={setChartSetIndex} />
        <ChartList2 mode={mode} charts={charts} setChartIndex={setChartIndex} />
        <ModeButton mode={mode} setMode={setMode} />
        <KeySettings mode={mode} defaultKeySettings={defaultKeySettingsSet[mode]} />
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

// 새 창에서 켜기

// https://api.chimu.moe/v1/search?query=peppy&amount=100&offset=0&status=0&mode=0&min_cs=0&max_cs=0