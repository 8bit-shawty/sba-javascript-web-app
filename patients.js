const baseUrl = `https://jsonplaceholder.typicode.com/users`
export async function getPatients(){
    try{
        const response = await axios.get(baseUrl)
        console.log(response)

    } catch(error){
        console.log("There was an error fetching the patients...Please try again later", error)
    }
}