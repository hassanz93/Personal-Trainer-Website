import React from 'react'
import Banner from './Banner'
import Ourtrainers from './Ourtrainers'
import Categories from './Categories'
import LatestTutorials from './LatestTutorials'
import TraineeComments from './Comments'
import Login from './Login'

function Home() {
  return (
    <div>
        <Banner />
        <Categories />
        <Login />
        <LatestTutorials />
        <Ourtrainers />     
        <TraineeComments />  
        
    </div>
  )
}

export default Home