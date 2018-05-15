const express = require('express')
const cors = require('cors')
const app = express()
var port = process.env.PORT || 3000

var people = [{
    id: 1,
    firstName: 'Alice',
    lastName: 'Zephyr',
    homeTown: 'Seattle'
},
{
    id: 2,
    firstName: 'Bob',
    lastName: 'Yellow',
    homeTown: 'Vancouver'
},
{
    id: 3,
    firstName: 'Claire',
    lastName: 'Xylitol',
    homeTown: 'Toledo'
},
{
    id: 4,
    firstName: 'Daniel',
    lastName: 'Winston',
    homeTown: 'Akron'
},
{
    id: 5,
    firstName: 'Edina',
    lastName: 'Veritas',
    homeTown: 'Wichita'
}
]

function findById(data, id){
    for(let i = 0; i<data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return null
}

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data: people
    })
})

app.get('/:id', ((req, res) => {
    var record = findById(cohorts, request.params.id)
    if(!record){
        response.status = 404;
        response.json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
}))

app.listen(port)