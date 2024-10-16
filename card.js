//import addNewPatient
// import { addNewPatient } from "./patients";
//Render a list of patients 
//make use of cards from bootstrap

export function renderCard(patients){
    const patientDiv = document.getElementById('patients')
    //make sure it is empty 
    patientDiv.innerHTML = ''

    if (!patients || patients.length === 0) {
        console.log("No patients to display."); //If there are no patients
        return;
    }

    //forEach patient we want to render a card that is a div 
    //that displays their id, name, diagnosis, and maybe a date
    patients.forEach((patient) => {
        const card = document.createElement('div')
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lorem nec nibh gravida, ut sollicitudin sem iaculis. Aenean mollis, urna vel convallis consectetur, mi."
        const date = new Date()
        card.classList.add('col')
        card.innerHTML = `
        <div class='card h-100 border-rounded'>
            <div class="card-body">
                <h3>PATIENT# ${patient.id}</h3>
                <h6>NAME: ${patient.name}</h6>
                <p class="card-text">${lorem}</p>
                <p class="footer">${date}</p>
            </div>
        </div>
        `
        patientDiv.appendChild(card)
    });
}

// export async function addPatient(){
//     //for each new patient we want an name and diagnosis
//     //not sure if the post automatically adds and id??
//     //(come back to this)
//     const newPatient = {
//         name: '',
//         diagnosis: ''
//     }
//     try {
//         const newlyCreatedPatient = await addNewPatient(newPatient);
//         console.log(`New patient added: `, newlyCreatedPatient)
//     } catch(error){
//         console.log("Error adding a new patient: ", error)
//     }
// }

