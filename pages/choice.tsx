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
    const [chartSets, setChartSets] = useState<any>();
    const [chartSetIndex, setChartSetIndex] = useState<number>(0);
    const [chartIndex, setChartIndex] = useState<number>();
    const [muted, setMuted] = useState<boolean>(false);
    useEffect(() => {
        fetch(`https://api.chimu.moe/v1/search?status=1&amount=100`)
            .then((res) => res.json())
            .then((data) => {
                setChartSets(data["data"])
            });
    }, []);
    useEffect(() => {
        function handleVisibilityChange() {
            if (document.hidden) {
                setMuted(true);
            } else {
                setMuted(false);
            }
        }
        window.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            window.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    if (!chartSets) {
        return <Loading />
    }
    let dogID = 723231;
    let chartSet = chartSets[chartSetIndex];
    let charts = chartSet?.ChildrenBeatmaps;
    if (chartSetIndex === undefined || chartSet == undefined) {
        return <>
            <Background setID={dogID} />
            <SearchBox mode={mode} setChartSets={setChartSets} />
            <ModeButton mode={mode} setMode={setMode} />
            <KeySettings mode={mode} />
        </>
    }
    return <>
        {chartSetIndex === undefined || chartSet == null ?
            <Background setID={dogID} /> :
            <Background setID={chartSet.SetId} />}
        <SearchBox mode={mode} setChartSets={setChartSets} />
        {chartSet != undefined && <MusicPanel chartSet={chartSet} />}
        {chartSet != undefined && <PreviewPlayer setID={chartSet.SetId} muted={muted} />}
        <MusicList chartSets={chartSets} setChartSetIndex={setChartSetIndex} />
        <ChartList mode={mode} charts={charts} chartIndex={chartIndex} setChartIndex={setChartIndex} />
        <ModeButton mode={mode} setMode={setMode} />
        <KeySettings mode={mode} />
    </>
}

