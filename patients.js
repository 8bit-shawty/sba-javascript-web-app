

const baseUrl = `https://jsonplaceholder.typicode.com/users`
export async function getPatients(){
    try{
        const response = await axios.get(baseUrl)
        console.log(response.data)
        return response.data
    } catch(error){
        console.log("There was an error fetching the patients...Please try again later", error)
    }
}

export async function searchPatients(value){
    try{
        const patients = await getPatients();
        //we want to return all the patients that match the same name as the input
        return patients.filter((patient) => 
            patient.name.toLowerCase().includes(value.toLowerCase())
        );
    } catch(error){
        console.log("There was an error looking up the patients: ", error)
    }
}

export async function addNewPatient(data){
    try{
        const response = await axios.post(baseUrl, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    } catch(error){
        console.log("There was an error trying to add a new patient to the list: ", error)
    }
}