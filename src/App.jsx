import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import axios from 'axios'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import Resident from './components/Resident'



function App() {
  const [currentLocation, setCurrentLocation] = useState(null)
  const handleForm = (e) => {
    e.preventDefault()
    const newL = e.target.newLocation.value
    fetchDimension(newL)
  }
 useEffect(() => {
  const randomDimension = getRandomDimension(126)
  fetchDimension(randomDimension)
 }, [])

 const fetchDimension = (idLocation) => {
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  axios
    .get(url)
    .then(({data}) => setCurrentLocation(data))
    .catch((err) => console.log(err))
 }
  
  return (
    <main className='main'>
      <div className='main-info-div'>
        <img className='rick-morty-title' src='images\rick-and-morty.png'/>
        <LocationForm handleForm={handleForm}/>
        <LocationInfo currentLocation={currentLocation}/>
      </div>
      <Resident residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  )
}

export default App
