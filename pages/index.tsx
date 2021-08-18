import React from 'react'
import Logo from '@components/atoms/Logo'
import FreeSolo from './Components/input'


const Home: React.FC = () => {
  return (
      <div style={{"margin": "auto", "background-color": "#cfe8fc", maxWidth: 1200, "margin-top": 50, padding: 20}}>
           <FreeSolo/>
      </div>
  )
}
export default Home
