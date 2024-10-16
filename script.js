import { addNewPatient, getPatients, searchPatients } from "./patients.js";
import { renderCard } from "./card.js";

let createdPatients = []

async function initialLoad() {
    try{
        const patients = await getPatients()
        const allPatients = [...patients, ...createdPatients]
        renderCard(allPatients)
    } catch(error){
        console.log("There was an error fetching the patients: ", error)
    }
}

async function handleSearch(e){
    const value = e.target.value;
    try{
        const patients = await searchPatients(value)
        const allPatients = [...patients, ...createdPatients]
        renderCard(allPatients)
    } catch(error){
        console.log("Error searching the patients: ", error)
    }
}
//can use a function

async function handleNewPatient(e){
    e.preventDefault();

    const nameValue = document.getElementById('patientName').value;
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lorem nec nibh gravida, ut sollicitudin sem iaculis. Aenean mollis, urna vel convallis consectetur, mi."

    const newPatientValue = {
        name: nameValue,
        diagnosis: lorem,
        id: createdPatients.length +11
    }

    try{
        const addedPatient = await addNewPatient(newPatientValue)

        //add the new created patients to the empty array
        createdPatients.push(addedPatient)

        console.log(`New Patient Added: ${addedPatient.name}`)
        //reload the page
        initialLoad();
    } catch(error){
        console.log("There was an error creating a new patient: ", error)
    }
}
document.getElementById('addForm').addEventListener('submit', handleNewPatient)
document.getElementById('search').addEventListener('input', handleSearch)

initialLoad()
// document.getElementById('addForm').addEventListener('submit', 
//     async(e) => {
//         //prevent the form submission
//         e.preventDefault()

//         const nameValue = document.getElementById('patientName').value;
//         const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lorem nec nibh gravida, ut sollicitudin sem iaculis. Aenean mollis, urna vel convallis consectetur, mi."

//         //logic for empty submission
//         if (!nameValue) {
//             console.log("Patient name is required.");
//             return;
//         }

//         const newPatientValue = {
//             name: nameValue,
//             diagnosis: lorem
//         }

//         try{
//             const addedPatient = await addNewPatient(newPatientValue)
//             console.log(`New patient added: ${addedPatient.name}`)
//             //this rerenders the page so we should get the newly added patient
//             initialLoad();
//         } catch(error){
//             console.log("There was an error adding a new patient: ", error)
//         }
// })
//initialize the input evenet listener

