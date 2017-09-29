import fetch from 'isomorphic-fetch'

export default function fetchAjoke() {
    return fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(res => res.value.joke)
}
