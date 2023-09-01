const LocationInfo = ({ currentLocation }) => {
  console.log(currentLocation)
  return (
    <div className="locationInfo-div">
        <h2 className="locationInfo-h2">Location Name: {currentLocation?.name} </h2>
        <ul className="locationInfo-ul">
            <li> <span className="locationInfo-span">Type</span> {currentLocation?.type} </li>
            <li> <span className="locationInfo-span">Dimension</span> {currentLocation?.dimension} </li>
            <li> <span className="locationInfo-span">Population</span> {currentLocation?.residents.length} </li>
        </ul>
    </div>
  )
}
export default LocationInfo