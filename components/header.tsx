import { css } from "@emotion/react";

const style = css`
  background-color: blueviolet;
  width: 100vw;
  height: 6px;
  color: white;
  z-index: 10;
`

export default function Header() {
  return <header css={style}>Header</header>
}
