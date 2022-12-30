export default function loadChart({ chart }) {
    fetch(`https://api.chimu.moe/v1/${chart.DownloadPath}`) // 1. .osz 다운로드
        .then()     // 2. .osz 압축해제 => file system


    // 3. file system, chart name, mode, 키설정 -> play.js 호출
    // (play.js 는 WASM으로 컴파일된 gosu)
    // 4. 새 창에서 render
    return <a href="/play" target="_blank"></a>
}