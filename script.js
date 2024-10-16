import { getPatients, searchPatients } from "./patients.js";
import { renderCard } from "./card.js";

async function initialLoad() {
    try{
        const patients = await getPatients()
        renderCard(patients)
    } catch(error){
        console.log("There was an error fetching the patients: ", error)
    }
}

async function handleSearch(e){
    const value = e.target.value;
    try{
        const patients = await searchPatients(value)
        renderCard(patients)
    } catch(error){
        console.log("Error searching the patients: ", error)
    }
}
//initialize the input evenet listener
document.getElementById('search').addEventListener('input', handleSearch)

initialLoad()

