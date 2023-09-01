const LocationForm = ({handleForm}) => {
  return (
    <form className="locationform-form">
        <input className= "locationform-input" min={1} max={126}placeholder="Type a location id... " type="number" /> 
        <button className="locationform-button">Search</button>
    </form>
  )
}
export default LocationForm