import fetch from 'isomorphic-fetch'

/* Public Key for 100 Chuck Norris facts a day allowance. */

const config = {
    headers: {
        'x-api-key': 'ecBldreuzk80wTAQdmfkk2xgVPH7MquX1D8FTndW'
    }
}

export default function fetchAjoke() {
    return fetch('https://0hg1zwamn6.execute-api.us-east-2.amazonaws.com/production/random-fact', config)
}
