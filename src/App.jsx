import React from 'react'
import Explore from './components/Explore'
import Exercises from './components/Exercises'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import More from './components/More';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <>
      <Router>
        <RootLayout />
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/explore" element={ <Explore />} />
          <Route path="/Exercises/:category" element={ <Exercises />}/>
          <Route path="/info/:id" element = {<More />}/>
        </Routes>
      </Router>  
    </>
  )
}

export default App