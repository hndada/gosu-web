import { css, Global } from "@emotion/react";
import Footer from "@Components/footer";

const globalStyles = css`
    body {
        margin: 0;
        font-family: sans-serif;
    }
`;

export default function MyApp({ Component, pageProps }) {
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
