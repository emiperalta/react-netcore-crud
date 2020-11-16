import axios from 'axios';

const baseURL = 'https://localhost:44333/api/';

const Api = (url = baseURL + 'candidates/') => {
    return {
        getAll: () => axios.get(url),
        getById: id => axios.get(url + id),
        create: newCandidate => axios.post(url, newCandidate),
        update: (id, updatedCandidate) => axios.put(url + id, updatedCandidate),
        delete: id => axios.delete(url + id)
    }
}

export default Api;