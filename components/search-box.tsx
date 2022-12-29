import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

const statusPriority = [1, 2, 3, 4, 0, -1, -2];
export default function SearchBox({ mode, setChartSets }) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
        // setQuery(e.target.value);
    };
    const params = [
        "&min_cs=4&max_cs=4&mode=3",
        "&min_cs=7&max_cs=7&mode=3",
        "&mode=1"][mode];
    const search = () => {
        fetch(`https://api.chimu.moe/v1/search?query=${value}&amount=100${params}`)
            .then((res) => res.json())
            .then((data) => {
                data["data"].sort((a, b) =>
                    statusPriority.indexOf(a.RankedStatus) -
                    statusPriority.indexOf(b.RankedStatus));
                setChartSets(data["data"])
            });
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') { search() }
    };
    useEffect(search, [mode]);
    return (
        <input value={value} placeholder="search..." css={css`
            width: 30vw;
            /* height: 32pt; */
            padding: 7px;
            min-width: 200px;
            margin: 20px;
            height: 20pt;
            font-size: 24pt;
            background-color: rgba(55, 184, 141, 0.9);
            color: white;
            position: absolute;
            right: 10px; 
            z-index: 5;
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