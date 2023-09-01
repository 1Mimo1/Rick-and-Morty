import { useEffect, useState } from "react"
import axios from "axios"

const ResidentCard = ({residentUrl}) => {
    const [residentInformation, setResidentInformation] = useState(null)
    const residentStatus = {
        Alive: "green-circle",
        Dead: "red-circle",
        unknown: "gray-circle"
    }
    
    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data}) => setResidentInformation(data))
            .catch((err) => console.log(err))
    }, [])
  return (
<div className="resident-div">
    <img  className="resident-card-image" src={residentInformation?.image} alt=""/>
    <div className="resident-card">
        <div className="resident-card-display">
            <h3>{residentInformation?.name}</h3>
        </div>
        <div className="resident-card-information">
            <div className="shadow">
                <div className="circles">
                    <div className={`${residentStatus[residentInformation?.status]}` }> 
                    </div>
                    <div className="circles-display">
                            {residentInformation?.status}
                    </div>
                </div>
                <ul className="resident-ul">
                    <li className="resident-li"><span className="span-resident">Species</span> {residentInformation?.species}</li>
                    <li className="resident-li"><span className="span-resident">Origin</span> {residentInformation?.origin.name}</li>
                    <li className="resident-li"><span className="span-resident">Appeared</span> {residentInformation?.episode.length}</li>
                </ul>
            </div>
        </div>
    </div>
</div >
  )
}
export default ResidentCard