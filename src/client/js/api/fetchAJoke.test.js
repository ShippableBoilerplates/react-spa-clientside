import 'babel-polyfill'
import {fetchAJoke} from './'

test('Should fetch a joke', async () => {
    const data = await fetchAJoke()
    expect(typeof data.status).toBeDefined()
})
