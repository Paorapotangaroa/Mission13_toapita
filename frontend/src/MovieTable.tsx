import React from 'react'
import CardList from './myComp'
import PageHeader from './PageHeader'
const MovieTable = () => {
  return (
    <>
    <PageHeader pageTitle="Movie Database" pageSubheader="Check out some of the Greatest Movie Hits Of All Time!!"/>

    <div className='container'>
      <div className='col2'></div>
        <div className='col'>
          <CardList/>
        </div>
      <div className='col2'></div>
    </div>
    </>
  )
}

export default MovieTable
