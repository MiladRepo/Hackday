import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Site } from './types'
import { delSite, getSites } from './helpers'
import { SiteForm } from './SiteForm'
import { LinkForm } from './LinkForm'
import { Search } from './Search'
import { Sites } from './Sites'
import { Routes, Route, Link } from 'react-router-dom'
import { Result } from './Result'
import { Start } from './Start'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/addsite' element={<SiteForm />}></Route>
        <Route path='/addlink' element={<LinkForm />}></Route>
        <Route path='/sites' element={<Sites />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </div>
  )
}

export default App
