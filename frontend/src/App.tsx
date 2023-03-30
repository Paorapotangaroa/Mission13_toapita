import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MovieTable from './MovieTable';
import Layout from './layout';
import Home from './Home';
import Podcasts from './Podcasts';


// Add router navigation to the app.(Also add inheritance for the home page)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<MovieTable />}/>
          <Route path='podcasts' element={<Podcasts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
