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
export default function KeySettings({ mode, defaultKeySettings }) {
  const [keySettings, setKeySettings] = useState(defaultKeySettings); // useState(['D', 'F', 'J', 'K']);
  const [cursor, setCursor] = useState<number>(keySettings.length);
  let maxKeyLength = mode === 1 ? 7 : 4;
  // console.log(mode, maxKeyLength);
  // onClick되면 cursor = 0, keySettings 비우기
  // cursor <  length 면 keydown 들어온 키 이름을 cursor 에 입력, cursor++
  // cursor >= length 되면 인풋 안 받음

  useEffect(() => {
    setKeySettings(defaultKeySettings);
  }, [defaultKeySettings]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (cursor >= maxKeyLength) { return }
      setKeySettings(prev => {
        const newKeySettings = [...prev];
        newKeySettings[cursor] = event.key;
        return newKeySettings
      });
      setCursor(prev => prev + 1) // 함수가 인자로 들어오면 prev가 getter로 동작
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [cursor]);

  return <div css={style} onClick={() => {
    setCursor(0);
    setKeySettings(Array(keySettings.length).fill(undefined));
  }}>
    {Array(keySettings.length).fill(0).map((_, i) => (
      <div className="key" style={cursor === i ? { backgroundColor: "yellow" } : undefined}>
        {keySettings[i]}
      </div>
    ))}
  </div>
}

// https://www.sliderrevolution.com/resources/css-range-slider/
