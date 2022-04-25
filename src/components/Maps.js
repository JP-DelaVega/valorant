import React from 'react'
import "../Maps.css"
import { Modal } from 'react-bootstrap'
function Maps() {
  const [lgShow, setLgShow] = React.useState(false);
  const [map, setMap] = React.useState();
  const [allData, setAllData] = React.useState([])
console.log(allData)
  React.useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then(res => res.json())
      .then(data => setAllData(data.data))
  }, [])
  console.log(allData)
  const maps = allData.map((item) => (

    <div className='mapdiv'>
      <div className='nameImage' >
     
        <h1 className='maps-name'>{item.displayName}</h1>
        <button onClick={() => {setLgShow(true); setMap(item.displayIcon)}} className="button-map">
        <img src={item.splash} className="maps-image" alt="maps">
        </img ></button>
      </div>
      <Modal
        size="md-down"
        centered
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Map
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src={map} className="mapIcon" alt="maps">
        </img ></Modal.Body>
      </Modal>
    </div>

  ))
  return (
    <div>{maps}</div>
  )
}

export default Maps