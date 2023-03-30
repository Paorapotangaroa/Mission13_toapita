import React from 'react'
import MovieTable from './MovieTable'

const moviePage = () => {
  return (
    <>
    <div className='container'>
      <div className='col2'></div>
        <div className='col'>
          <MovieTable />
        </div>
      <div className='col2'></div>
    </div>
    </>
  )
}

export default moviePage
