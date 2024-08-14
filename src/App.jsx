import { useState } from 'react'
import Home from './pages/home'
import Header from './components/navbar'
import Form from './pages/form'
import Details from './pages/details'
import Movies from './pages/movies'


import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/details" element={<Details />} />
        <Route path="/form" element={<Form />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
     
      </BrowserRouter>
  
    </div>
    

  )
}

export default App
