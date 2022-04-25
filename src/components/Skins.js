import React from 'react'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Skins.css"
export default function Skins() {
  const location = useLocation();
  const { from } = location.state;
  const gunSkins = from.skins
  const [info, setInfo] = React.useState({
    image: "",
    gunName: "",
    wallpaper:""
  })
  const guns = gunSkins.filter((val) => {
    if (val.displayIcon === null) {
      return ""
    }
    return val
  }).map((item) => (
    <div className='box'>
      <img src={item.displayIcon} alt="guns" className="gunIcon"
        onClick={() =>
          setInfo({
            image: item.displayIcon,
            gunName: item.displayName,
            wallpaper: item.wallpaper
          })}>
      </img >
    </div>
  ))
  return (
    <div className='gunBox'>
      <div className='back'><Link as={Link} to="/armory" state={{ from: info }}>Back</Link></div>
      <div className='gunInfo2' style={{
        backgroundImage: `url(${info.wallpaper})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='leftGun'>
          <div className='gun-name2'>
            <h1 className='gun-name'>{info.gunName}</h1>
          </div>
          <div className='gun'>
            <img src={info.image} className="gunIconv2" />
          </div>
        </div>
      </div>
      <div className='gunDiv'>{guns}</div>

    </div>
  )
}
