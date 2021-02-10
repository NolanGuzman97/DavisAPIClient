const supertest = require('supertest')
const createServer = require('./create_server')
const conversion_api = require('./routes/conversion_api')

const app = createServer()

test("GET /formula/:id single", async () => {
    await supertest(app)
    .get("/formula")
    .query({id: 'methanol'})
    .expect(200)
    .then(response => {
        expect(response.text).toBe('CH4O')
    })
})

test("GET /formula/:id multiple", async () => {
    await supertest(app)
    .get("/formula")
    .query('id=methanol&id=ethanol')
    .expect(200)
    .then(response => {
        expect(response.text).toBe("[\"CH4O\",\"C2H6O\"]")
    })
})
