import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard"
import PageCreator from "./PageCreator";

const INITIAL_PAGE = 1

const Resident = ({residents , currentLocation}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const RESIDENTS_PER_PAGE = 5;

    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
    const sliceShown = residents.slice(sliceStart, sliceEnd);

    const pages = []

    for(let x = 1; x <= totalPages; x++) {
        pages.push(x);
    }
    
    useEffect(() => {
        setCurrentPage(INITIAL_PAGE)
    }, [currentLocation])

  return (
    <section>
        <section className="resident-section">
            {
                sliceShown.map((resident) => (
                <ResidentCard key={resident} residentUrl={resident} />
            ))}
        </section>
            <PageCreator pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  )
}
export default Resident;