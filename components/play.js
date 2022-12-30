import Loading from "@Components/loading";

export default function PlayPage() {
    if (!chartSets) {
        return <Loading />
    }
    // 키 설정 소개
}

// 압축 해제
// []string으로 바꿔주기

// fsys fs.FS, cname string, mode int, mods interface{}, rf *osr.Format, ks []string
export function load(fsys, cname, mode, mods, rf, ks) {
    // const importObject = { imports: { imported_func: (arg) => console.log(arg) } };
    WebAssembly.instantiateStreaming(fetch("play.wasm"), undefined).then( // importObject
        (obj) => obj.instance.exports.NewScene(fsys, cname, mode, mods, rf, ks)
    );
} 