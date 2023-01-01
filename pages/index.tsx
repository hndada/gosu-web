// import Link from 'next/link'
import { Routes, Route, Router } from 'react-router-dom'
import Choice from './choice'
import Play from './play'

export default function IndexPage() {
  return <Choice />
}
{/* <Router >
<Routes>
  <Route path="/" element={<Choice />} />
  <Route path="/play" element={<Play />} />
  <Route path="*" element={<Choice />} />
</Routes>
</Router> */}