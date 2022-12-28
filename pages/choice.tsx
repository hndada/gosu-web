
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import MusicPanel from "../components/music-panel";
import SearchBox from "../components/search-box";
import ChartList from "../components/chart-list";
import Background from "../components/background";
import ModeButton from "@Components/mode-button";

export default function ChoicePage() {
    // const [value, setValue] = useState<any>();
    // const [query, setQuery] = useState<any>();
    const [chartSets, setChartSets] = useState<any>();
    const [chosen, setChosen] = useState<number>(0);
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
    return <>
        {chosen === undefined ?
            <Background chosenChartSetID={dogID} /> :
            <Background chosenChartSetID={chartSets[chosen].SetId} />}
        {/* <Background chartSets={chartSets} /> */}
        <ChartList setChosen={setChosen} />
        <SearchBox setChartSets={setChartSets} />
        <ModeButton />
        {chosen != undefined && <MusicPanel chosenChartSet={chartSets[chosen]} />}
    </>
}