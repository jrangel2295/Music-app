import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Card from '../Card/Card'
import BasicCard from '../Card1/Card1'
import BasicCard3 from '../Card3/Card3'
// import Signup from './Signup'

export default function DashBoard(props) {
  const [isOnline, setIsOnline] = useState(false)

  useEffect(()=>{
    console.log(isOnline)
  }, [isOnline])

  return (
    <div className="App">
      <Header />
      <h1 className='welcome-text'>Welcome johnny</h1>
      <Card />
      <BasicCard isOnline={isOnline} setIsOnline={setIsOnline} />
      <BasicCard3 />
    </div>
  );
}