import { css } from "@emotion/react"

const style = css`
margin: auto;
align-items: center; // to locate Bar on the center
display: flex;

.bar {
  display: inline-block;
  width: 25px;
  height: 100px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-of-type(2) {
  height: 135px;
  margin: 0 8px;
  animation-delay: .25s;
}

.bar:nth-of-type(3) {
  animation-delay: .5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}`

const kbdStyle = css`
	font-size: 32px;
  position: absolute;
  /* left: 30vw; */
  bottom: 5vh;
  transition: transform(-50%, -50%);
kbd{
  margin: 0px 0.1em;
	padding: 0.1em 0.6em;
	border-radius: 3px;
	border: 1px solid rgb(204, 204, 204);
	color: rgb(51, 51, 51);
	line-height: 1.4;
	font-family: Arial,Helvetica,sans-serif;
	display: inline-block;
	box-shadow: 0px 1px 0px rgba(0,0,0,0.2), inset 0px 0px 0px 2px #ffffff;
	background-color: rgb(247, 247, 247);
	-moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
	-webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	text-shadow: 0 1px 0 #fff;
}
`
export default function LoadingPage() {
  return (
    <div className="background" css={css`
      background-color: cadetblue;
      width: 100vw;
      height: 100vh;
      display: flex; // to set Loader on the center
      align-items: center;
    `}>
      <div css={kbdStyle}>
        Music Volume: <kbd>Ctrl</kbd> + <kbd>↔</kbd> <br></br>
        Sound Volume: <kbd>Alt</kbd> + <kbd>↔</kbd> <br></br>
        Offset: <kbd>Shift</kbd> + <kbd>↔</kbd> <br></br>
        Brightness: <kbd>Ctrl</kbd> + <kbd>O</kbd> / <kbd>P</kbd> <br></br>
        Pause: <kbd>Tab</kbd> <br></br>
      </div>
      <div className="loader" css={style}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  )
}

// https://uiverse.io/aryamitra06/silent-lion-21