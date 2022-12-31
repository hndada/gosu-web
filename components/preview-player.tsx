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
    // setID가 바뀌면, preview 오디오 파일 요청
    const ref = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        ref.current.volume = 0.15;
        // audioRef.current.play();
    }, []);
    useEffect(() => {
        ref.current.muted = muted
    }, [muted])
    return (
        <audio css={style}
            ref={ref}
            autoPlay
            controls
            // onEnded={handleOnEnded}
            src={`https://b.ppy.sh/preview/${setID}.mp3`}
            loop
        />
    );

    const [preview, setPreview] = useState<AudioBuffer>();
    const previewURL = (setID) => {
        fetch(`https://b.ppy.sh/preview/${setID}.mp3`)
            .then((res) => {
                setPreview(res["data"])
            });


        return
    }

    // setTargetAtTime(target: number, startTime: number, timeConstant: number)
    // preview.gainNode.gain.setTargetAtTime(0,
    //     music.data.highlight.end - music.data.highlight.start - 1, 0.25)

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioRef.current.volume = 0; // start with zero volume
        audioRef.current.play();
        setIsPlaying(true);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const fadeInInterval = setInterval(() => {
                if (audioRef.current.volume < 1) {
                    audioRef.current.volume += 0.05;
                } else {
                    clearInterval(fadeInInterval);
                }
            }, 25);

            return () => {
                clearInterval(fadeInInterval);
            };
        }
    }, [isPlaying]);

    const handleOnEnded = () => {
        const fadeOutInterval = setInterval(() => {
            if (audioRef.current.volume > 0) {
                audioRef.current.volume -= 0.05;
            } else {
                clearInterval(fadeOutInterval);
                audioRef.current.currentTime = 0; // reset audio time to start
                audioRef.current.play(); // play audio again
            }
        }, 25);

        return () => {
            clearInterval(fadeOutInterval);
        };
    };

    return (
        <audio
            ref={audioRef}
            onEnded={handleOnEnded}
            src="/path/to/audio.mp3"
            loop
        />
    );
}