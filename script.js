import { getPatients } from "./patients.js";

async function initialLoad() {
    try{
        const patients = await getPatients()
    } catch(error){
        console.log("There was an error fetching the patients: ", error)
    }
}

initialLoad()

