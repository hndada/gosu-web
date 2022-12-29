import { css } from "@emotion/react";
import { useRef, useState } from "react";

const style = css`
 position: absolute;
 left: 20px;
 bottom: 40px;
 border: none;
 background: transparent;
 padding: 0;
 cursor: pointer;
 outline-offset: 4px;
 transition: filter 250ms;
 user-select: none;
 touch-action: manipulation;

.shadow {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 border-radius: 12px;
 background: hsl(0deg 0% 0% / 0.25);
 will-change: transform;
 transform: translateY(2px);
 transition: transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.edge {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 border-radius: 12px;
 background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.front {
 display: block;
 position: relative;
 padding: 12px 27px;
 border-radius: 12px;
 font-size: 1.1rem;
 color: white;
 background: hsl(345deg 100% 47%);
 will-change: transform;
 transform: translateY(-4px);
 transition: transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

&:hover {
 filter: brightness(110%);
}

&:hover .front {
 transform: translateY(-6px);
 transition: transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

&:active .front {
 transform: translateY(-2px);
 transition: transform 34ms;
}

&:hover .shadow {
 transform: translateY(4px);
 transition: transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

&:active .shadow {
 transform: translateY(1px);
 transition: transform 34ms;
}

&:focus:not(:focus-visible) {
 outline: none;
}
.button0 {
    background: hsl(15deg 100% 47%);
    background-color: bisque;
    color: yellow;
}
`
// style={{backgroundColor: color}}
// className={`button${mode}`}
export default function ModeButton({mode, setMode}) {
    // const ref=useRef(null);
    const handleClick = () => {
        setMode((mode) => (mode + 1) % 3);
        console.log(mode)
    };
    // const color = mode === 0 ? 'button-red' : mode === 1 ? 'green' : 'blue';
    return (
        <button css={style} onClick={handleClick}> 
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> Mode: {["Piano4", "Piano7", "Drum"][mode]}
            </span>
        </button>);
}