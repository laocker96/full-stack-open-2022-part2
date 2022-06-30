import axios from "axios"

const baseUrl = "http://localhost:3001/persons";
const response = (request) => request.then(response => response.data);

const getAllPersons = () => {
    const request = axios.get(baseUrl);
    return response(request);
}

const savePerson = (person) => {
    const request = axios.post(baseUrl, person);
    return response(request);
}

export default { getAllPersons, savePerson }