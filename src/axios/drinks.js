// all modules are asynchronous and promises-based
// request axios module
import { requester as http } from './http'

const makeDrink = drink => {
    return new Promise((resolve, reject) => {
        http.get(`/?r=main/make/drink/${drink}`, {})
        .then(response => resolve(response))
    })
    .catch(e => {
        console.error(e)
    })
}

export {
    makeDrink
}
