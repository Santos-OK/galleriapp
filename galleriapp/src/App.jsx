import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title'
import Gallery from './components/gallery'
import Leyenda from './components/leyenda'

function App() {

  return (
    <>
      <Title/>
      <Gallery/>
      <Leyenda/>
    </>
  )
}

export default App
