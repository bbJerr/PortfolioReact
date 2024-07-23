import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index/Index';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Index />}> 
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App