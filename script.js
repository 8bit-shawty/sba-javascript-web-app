import { addNewPatient, getPatients, searchPatients } from "./patients.js";
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

document.getElementById('addForm').addEventListener('submit', 
    async(e) => {
        //prevent the form submission
        const nameValue = document.getElementById('patientName').value;
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lorem nec nibh gravida, ut sollicitudin sem iaculis. Aenean mollis, urna vel convallis consectetur, mi."
        const newPatientValue = {
            name: nameValue,
            diagnosis: lorem
        }

        try{
            const addedPatient = await addNewPatient(newPatientValue)
            console.log(`New patient added: ${addedPatient.name}`)
            initialLoad();
        } catch(error){
            console.log("There was an error adding a new patient: ", error)
        }
})
//initialize the input evenet listener
document.getElementById('search').addEventListener('input', handleSearch)

initialLoad()

