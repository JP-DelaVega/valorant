import React from 'react'
import "../Armory.css"
import {  Link } from "react-router-dom";
export default function Armory() {
  const [info, setInfo] = React.useState({
    image: "",
    gunName: "",
    gunStats: "",
    skins:""
  })
  const [allData, setAllData] = React.useState([])
  React.useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then(res => res.json())
      .then(data => setAllData(data.data))
  }, [])
  const guns = allData.filter((val)=>{
    if(val.displayName !== "Melee"){
        return val
    }
    return ""
}).map((item) => (
    <div className='box'>
      <img src={item.displayIcon} alt="guns" className="gunIcon" onClick={() =>
        setInfo({
          image: item.displayIcon,
          gunName: item.displayName,
          gunStats: item.weaponStats,
          skins: item.skins
        })}>
      </img >
    </div>

  ))

  console.log(allData)

  return (
    <div className='gunBox'>
      {info.gunName === "" ? "" : <div className='gunInfo'>
        <div className='leftGun'>
          <div className='gunName'>
            <h1 className='gun-name'>{info.gunName}</h1>
          </div>
          <div className='gun'>
            <img src={info.image} alt="gunIcon" className="gunIconv2" />
          </div>
          <Link as={Link} to="/armory/skins" state={{ from: info }}><button className="btn btn1" >View Skins</button></Link>
          
        </div>
        <div className='rightGun'>
          <div className='stat'><h5>FireRate: </h5><h6>{info.gunStats.fireRate}</h6></div>
          <div className='stat'><h5>FirstBulletAccuracy: </h5><h6>{info.gunStats.firstBulletAccuracy}</h6></div>
          <div className='stat'><h5>MagazineSize: </h5><h6>{info.gunStats.magazineSize}</h6></div>
          <div className='stat'><h5>ReloadTimeSeconds: </h5><h6>{info.gunStats.reloadTimeSeconds}</h6></div>
          <div className='stat'><h5>RunSpeedMultiplier: </h5><h6>{info.gunStats.runSpeedMultiplier}</h6></div>
          <div className='stat'><h5>ShotgunPelletCount: </h5><h6>{info.gunStats.shotgunPelletCount}</h6></div>
        </div>
      </div>}
      {info.gunName === "" ? <div className='gunDiv2'>{guns}</div> : <div className='gunDiv'>{guns}</div>}
    </div>
  )
}
