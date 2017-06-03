// axios module
// invoque axios and config.js to get endpoint addres
import axios from 'axios'

const requester = axios.create({
    baseURL: 'http://192.168.0.104',
    timeout: 10000
})

export {
    requester
}
