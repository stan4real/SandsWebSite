import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../../App'
import Events from '../EventsPage/NewPage/Events'

const Router = () => {
  return <BrowserRouter>
    <Routes>
        <Route element = {<App/>} path='/'/>
        <Route element = {<Events/>} path='/Events'/>
        <Route path='*' element= {<div>Not Found </div>}/>
    </Routes>
  </BrowserRouter> 
    
}

export default Router