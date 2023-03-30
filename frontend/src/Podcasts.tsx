import React from 'react'
import PageHeader from './PageHeader'

const Podcasts = () => {
  return (
    <>
    <PageHeader pageTitle="Podcasts" pageSubheader="Check out the button below for some amazing podcasts!" />
    <div className='container'>
      <div className='col2'></div>
        <div className='col text-center'>
          <a href='https://baconsale.com/' className='btn btn-primary btn-lg'>Podcasts</a>
        </div>
      <div className='col2'></div>
    </div>
    </>
  )
}

export default Podcasts
