import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
const style = css`
    position: fixed;
    left: 40vw;
    bottom: 3vh;
    width: 20vw;
    transition: translateX(-50%);
    z-index: 2;
`
export default function PreviewPlayer({ setID, muted }) {
    const ref = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        ref.current.volume = 0.15;
    }, []);
    useEffect(() => {
        ref.current.muted = muted
    }, [muted])
    return (
        <audio css={style}
            ref={ref}
            autoPlay
            controls
            src={`https://b.ppy.sh/preview/${setID}.mp3`}
            loop
        />
    );
}