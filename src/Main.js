import React from 'react'
import "./Main.css"
export default function Main() {
  return (
    <div className='main-page'>
       <h1 className='welcome'>Website using Valorant-API</h1>
       <a href='https://valorant-api.com/' target={"_blank"}><button className='learn-more'>Learn More</button></a>
       <img src={require('./images/valLogo.png')}className="valLogo"></img>
    </div>
  )
}
