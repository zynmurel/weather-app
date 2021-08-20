import React from 'react'
import FreeSolo from './Components/input'
import CardGrid from './Components/cardgrid'

const Home: React.FC = () => {
  return (
      <div style={{padding: 5}}>
           <FreeSolo/>
           <CardGrid></CardGrid>
      </div>
  )
}
export default Home
