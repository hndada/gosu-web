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
export default function KeySettings({ mode }) {
  const [piano4, setPiano4] = useState(['d', 'f', 'j', 'k']);
  const [piano7, setPiano7] = useState(['s', 'd', 'f', ' ', 'j', 'k', 'l']);
  const [drum4, setDrum4] = useState(['z', 'x', 'c', 'v']);
  const [cursor, setCursor] = useState<number>(10);

  let maxKeyLength = mode === 1 ? 7 : 4;
  useEffect(() => {
    const handleKeydown = (event) => {
      if (cursor >= maxKeyLength) { return }
      // let set =
      //   mode === 0 ? setPiano4 :
      //     mode === 1 ? setPiano7 :
      //       mode === 2 ? setDrum4 :
      //         null;
      if (mode === 0) {
        setPiano4(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.key;
          localStorage.setItem('keySettings',newKeySettings.toString());
          return newKeySettings
        });
      }
      if (mode === 1) {
        setPiano7(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.key;
          localStorage.setItem('keySettings',newKeySettings.toString());
          return newKeySettings
        });
      }
      if (mode === 2) {
        setDrum4(prev => {
          const newKeySettings = [...prev];
          newKeySettings[cursor] = event.key;
          localStorage.setItem('keySettings',newKeySettings.toString());
          return newKeySettings
        });
      }
      setCursor(prev => prev + 1) // 함수가 인자로 들어오면 prev가 getter로 동작
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [cursor]);

  // let keySettings = [piano4, piano7, drum4][mode];
  // let setKeySettings [setPiano4, setPiano7, setDrum4][mode];

  return <div css={style} onClick={() => {
    setCursor(0);
    {
      mode === 0 ? Array(4).fill(undefined) :
        mode === 1 ? Array(7).fill(undefined) :
          mode === 2 ? Array(4).fill(undefined)
            : null
    }
  }}>
    {Array(maxKeyLength).fill(0).map((_, i) => (
      <div className="key" style={cursor === i ? { backgroundColor: "yellow" } : undefined}>
        {mode === 0 ? piano4[i].toUpperCase()
          : mode === 1 ? piano7[i].toUpperCase()
            : mode === 2 ? drum4[i].toUpperCase()
              : null}
      </div>
    ))}
  </div>



  // let defaultKeySettingsSet = [
  //   ['d', 'f', 'j', 'k'],
  //   ['s', 'd', 'f', ' ', 'j', 'k', 'l'],
  //   ['z', 'x', 'c', 'v']
  // ]


  // const [keySettings, setKeySettings] = useState(defaultKeySettings); // useState(['D', 'F', 'J', 'K']);
  // const [cursor, setCursor] = useState<number>(keySettings.length);
  // let maxKeyLength = mode === 1 ? 7 : 4;
  // // console.log(mode, maxKeyLength);
  // // onClick되면 cursor = 0, keySettings 비우기
  // // cursor <  length 면 keydown 들어온 키 이름을 cursor 에 입력, cursor++
  // // cursor >= length 되면 인풋 안 받음

  // useEffect(() => {
  //   setKeySettings(defaultKeySettings);
  // }, [defaultKeySettings]);

  // useEffect(() => {
  //   const handleKeydown = (event) => {
  //     if (cursor >= maxKeyLength) { return }
  //     setKeySettings(prev => {
  //       const newKeySettings = [...prev];
  //       newKeySettings[cursor] = event.key;
  //       return newKeySettings
  //     });
  //     setCursor(prev => prev + 1) // 함수가 인자로 들어오면 prev가 getter로 동작
  //   };
  //   window.addEventListener('keydown', handleKeydown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeydown);
  //   };
  // }, [cursor]);

  // return <div css={style} onClick={() => {
  //   setCursor(0);
  //   setKeySettings(Array(keySettings.length).fill(undefined));
  // }}>
  //   {Array(keySettings.length).fill(0).map((_, i) => (
  //     <div className="key" style={cursor === i ? { backgroundColor: "yellow" } : undefined}>
  //       {keySettings[i]}
  //     </div>
  //   ))}
  // </div>
}

// https://www.sliderrevolution.com/resources/css-range-slider/
