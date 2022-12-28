import { css, Global } from "@emotion/react";
// import Header from "../components/header";
import Footer from "@Components/footer";

const globalStyles = css`
    body {
        margin: 0;
        font-family: sans-serif;
    }
`;

// 아니그 파일을 파괴하고 여기로 옮기라는게아니었는데요ㅠ 이런건 거의 100% 분리하죠
export default function MyApp({ Component, pageProps }) {
    // 저 대충 스스로 정한..?게 있긴 한데
    // 예전부터 css 야매로 배워가면서 막 정한거라
    // 딱히 좋다거나 그런건 아님
    // display
    // position
    // width/height
    // max/min width/height
    // font
    // text
    // color
    // background
    // shadow/transition/translation/animation/기타등등
    // 그냥 제가 적는 순서대로요
    return (
        <div css={css`
          display: flex; 
          flex-direction: column;
          width: 100vw;
          height: 100vh;
        `}>
            <Global styles={globalStyles} />
            {/* <Header /> */}
            <div css={css`
                flex-grow: 1;
                overflow: hidden;
            `}>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
