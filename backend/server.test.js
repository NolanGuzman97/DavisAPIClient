const supertest = require('supertest')
const createServer = require('./create_server')
const conversion_api = require('./routes/conversion_api')

const app = createServer('DEV')

test("GET /formula/:id single", async () => {
    await supertest(app)
    .get("/formula")
    .query({id: 'methanol'})
    .expect(200)
    .then(response => {
        expect(response.text).toBe("[[\"methanol\",\"CH4O\"]]")
    })
})

test("GET /formula/:id multiple", async () => {
    await supertest(app)
    .get("/formula")
    .query('id=methanol&id=ethanol')
    .expect(200)
    .then(response => {
        expect(response.text).toBe("[[\"methanol\",\"CH4O\"],[\"ethanol\",\"C2H6O\"]]")
    })
})
