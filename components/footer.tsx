import { css } from "@emotion/react"
import Link from "next/link"

const style = css`
  display: flex;
  justify-content:  center;
  align-items: center;
  
  background-color: #2b1180;
  width: 100vw;
  height: 3vh;
  color: white;
  text-align: center;
  z-index: 10;
`

export default function Footer() {
  return (
    <footer css={style}>
      <Link href={"/"} css={css`color:white;`}>Muang</Link>&nbsp;powered
      <div> &nbsp;&nbsp;🦴gosu v0.4.1&nbsp;&nbsp;</div>
      <Link href={"https://github.com/hndada/gosu"} target={"_blank"} css={css`color:white;`}>Source Code</Link>
    </footer>
  )
}
