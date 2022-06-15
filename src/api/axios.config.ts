import axios from 'axios'
import {serviceURL} from './server.config.json'

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
})

export {
    instance,
}