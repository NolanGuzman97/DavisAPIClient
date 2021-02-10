const express = require('express')
const router = express.Router()
const axios = require('axios')
var baseUrl = "https://cactus.nci.nih.gov/chemical/structure"

//Async function that allows for list of ids or single id to be provided with a single representation type
async function conversionRequest(ids,rep, response) {
    //Handles multiple inputs
    if(typeof ids === "object") {
        //Map the ids array so that we can create multiple promises at once
        let promiseArr = ids.map(id => 
            axios.post(`${baseUrl}/${id}/${rep}`)
                .then(res => 
                    res.data))
        //Fulfill all promises at one time, returning array of results from API
        Promise.all(promiseArr).then(res => {
            //With passed response variable from our get call, we can send our axios data
            //direct to the page
            response.send(res)
        })
    //Handles single list inputs
    } else{
        //Create single promise
        let promise = axios.post(`${baseUrl}/${ids}/${rep}`)
                        .then(res => 
                            res.data)
        //Resolve promise and register results to page
        Promise.resolve(promise).then(res => {
            response.send(res)
        })
    }
    
}

router.get('/', (req, res) => {
    res.send('PlaceHolder text')
})

//User supplies Chemical(id) and Representation(rep)
router.get('/:rep', (req, res) => {
    //Pull parameters from URL and store in variables
    let ids = req.query.id
    let rep = req.params.rep
    //Use Axios post request to call our external API
    //API FORMAT: baseURL/"structure identifier(id)"/"representation(rep)"
    conversionRequest(ids,rep, res)
})

module.exports = router;