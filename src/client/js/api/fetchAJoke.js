import fetch from 'isomorphic-fetch'

/* Public Key for 100 Chuck Norris facts a day allowance. */

const config = {
    headers: {
        'x-api-key': 'ecBldreuzk80wTAQdmfkk2xgVPH7MquX1D8FTndW'
    }
}

export default function fetchAjoke() {
    return fetch('https://chuck.boilerplate.space/random-fact', config)
}
