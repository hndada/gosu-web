import Loading from "@Components/loading";
import { useState } from "react";
const format = {
    "BeatmapId": 713545,
    "ParentSetId": 320687,
    "DiffName": "Easy",
    "FileMD5": "b70fdf2f957b426d9c802fbb952d418b",
    "Mode": 0,
    "BPM": 120,
    "AR": 5,
    "OD": 5,
    "CS": 5,
    "HP": 5,
    "TotalLength": 204,
    "HitLength": 175,
    "Playcount": 0,
    "Passcount": 0,
    "MaxCombo": 173,
    "DifficultyRating": 2.08334,
    "OsuFile": "spro333 - Renatus (spro333) [Easy].osu",
    "DownloadPath": "/d/320687"
}

// keySettings, []string으로 바꿔주기?
export default function PlayPage({ chart, keySettings }) {
    return <iframe src="/play.html" width="1600" height="900" />;
}

// fetch(`https://api.chimu.moe/v1/${chart.DownloadPath}`)

// fsys, cname, mode, mods, rf, ks
// fsys fs.FS, cname string, mode int, mods interface{}, rf *osr.Format, ks []string
// export function load0(fsys, cname, mode, mods, rf, ks) {
//     // const importObject = { imports: { imported_func: (arg) => console.log(arg) } };
//     WebAssembly.instantiateStreaming(fetch("play.wasm"), undefined).then( // importObject
//         (obj) => obj.instance.exports.NewScene(fsys, cname, mode, mods, rf, ks)
//     );
// }

