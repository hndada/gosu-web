import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';

const style = css`
  display: flex;
  position: absolute;
  left: 200px;
  bottom: 4vh;
  z-index: 3;
  .key {
  display: flex;
  width: 40px;
  height: 40px;
  background-color: cornsilk;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
  margin: 3px;
  border-style: ridge;
  border-color: darkcyan;
}
`
function keyName(k) {
  let k2 = k.replace('Key', '').replace('Numpad', '')
  if (k2.length === 1) {
    k2 = k2.toUpperCase()
  }
  return k2
}
export default function KeySettings({ mode }) {
  const [piano4, setPiano4] = useState(['D', 'F', 'J', 'K']);
  const [piano7, setPiano7] = useState(['S', 'D', 'F', 'Space', 'J', 'K', 'L']);
  const [drum4, setDrum4] = useState(['Z', 'X', 'C', 'V']);
  const [cursor, setCursor] = useState<number>(10);
  localStorage.setItem('keyPiano4', piano4.toString())
  localStorage.setItem('keyPiano7', piano7.toString());
  localStorage.setItem('keyDrum4', drum4.toString());

  let maxKeyLength = mode === 1 ? 7 : 4;
  useEffect(() => {
    const handleKeydown = (event) => {
      if (cursor >= maxKeyLength) { return }
      if (mode === 0) {
        setPiano4(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.code.replace('Key', '');
          localStorage.setItem('keyPiano4', newKeySettings.toString());
          return newKeySettings
        });
      }
      if (mode === 1) {
        setPiano7(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.code.replace('Key', '');
          localStorage.setItem('keyPiano7', newKeySettings.toString());
          return newKeySettings
        });
      }
      if (mode === 2) {
        setDrum4(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.code.replace('Key', '');
          localStorage.setItem('keyDrum4', newKeySettings.toString());
          return newKeySettings
        });
      }
      setCursor(prev => prev + 1) // prev works as getter if args is a function.
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [cursor]);

  return <div css={style} onClick={() => {
    setCursor(0); // clear key settings
    {
      mode === 0 ? Array(4).fill(undefined) :
        mode === 1 ? Array(7).fill(undefined) :
          mode === 2 ? Array(4).fill(undefined)
            : null
    }
  }}>
    {Array(maxKeyLength).fill(0).map((_, i) => (
      <div className="key" style={cursor === i ? { backgroundColor: "yellow" } : undefined}>
        {mode === 0 ? keyName(piano4[i])
          : mode === 1 ? keyName(piano7[i])
            : mode === 2 ? keyName(drum4[i])
              : null}
      </div>
    ))}
  </div>
}

// https://www.sliderrevolution.com/resources/css-range-slider/