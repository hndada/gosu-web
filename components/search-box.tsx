import { css } from '@emotion/react';
import React, { useState } from 'react';

export default function SearchBox({ setChartSets }) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
        // setQuery(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetch(`https://api.chimu.moe/v1/search?query=${value}`)
                .then((res) => res.json())
                .then((data) => {
                    setChartSets(data["data"])
                    // console.log(data)
                });
        }
    };
    return (
        <input value={value} placeholder="search..." css={css`
            width: 30vw;
            padding: 7px;
            min-width: 200px;
            height: 20pt;
            font-size: 20pt;
            background-color: rgba(55, 184, 141, 0.518);
            color: white;
            position: absolute;
            right: 10px; 
            `} onChange={handleChange} onKeyDown={handleKeyPress} />
    );
}

// function SearchBox({ setQuery }) {
//     const search = (e) => {
//         e.preventDefault();
//         new FormData(e.currentTarget).get("그인풋name")
//         // console.log("hehe") // 출력됨ㅎㅎ
//         setQuery(`https://api.chimu.moe/v1/search?query=${e.target.value}`)
//     }
//     return <form onSubmit={search}>
//         <input type="text" placeholder="search..." className={styles["search"]}></input>
//     </form>
// }