import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-mern-backend.herokuapp.com/'
})

export default instance