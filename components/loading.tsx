import { css } from "@emotion/react"

const style = css`
margin: auto;
align-items: center; // Bar를 가운데로 옮기기 위함
display: flex;

.bar {
  display: inline-block;
  width: 25px;
  height: 100px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 135px;
  margin: 0 8px;
  animation-delay: .25s;
}

.bar:nth-child(3) {
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

export default function LoadingPage() {
  return (
    <div className="background" css={css`
      background-color: cadetblue;
      width: 100vw;
      height: 100vh;
      display: flex; // Loader를 가운데로 옮기기 위함
      align-items: center;
    `}>
      <div className="loader" css={style}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  )
}

// https://uiverse.io/aryamitra06/silent-lion-21