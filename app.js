const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.get('/api', (req, res) => {
    res.status(200).send({ message:'hola mundo' })
})

app.get('/api/suma', (req, res) => {
    const num1 = 5;
    const num2 = 2;
    const suma = num1 + num2
    res.status(200).send({resultado:`${suma}`})
})

app.get('/api/:usuario', (req, res) => {
    const name = req.params.usuario
    res.status(200).send({usuario: `${name}`})
})

app.get('/api/swapi/:character', (req, res) => {
    const character = req.params.character;
    const url = `https://swapi.dev/api/people/${character}`

    request(url, (err, response, body) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.json({personaje:JSON.parse(body)})
        }
    })

})

app.use(bodyParser.json());

app.put('/api/body', (req, res) =>{
    const requestBody = req.body;
    res.status(200).json(requestBody);

});

app.use(bodyParser.json());

app.post('/api/sumas', (req, res) => {
    
    const num1 = parseInt(req.body.num1);
    console.log(num1)
    const num2 = parseInt(req.body.num2)
    console.log(num2)
    let suma = num1 + num2
    
    res.status(200).json(suma)
})

app.delete('/api/:id', (req, res) => {
    const identification = req.params.id;
    if (identification == 3){
        res.status(200).send({ message:`Se ha eliminado el objeto con ID: ${identification}` })

    } else {
        res.status(400).send({ message: `No se encontró el objeto con el ID especificado`})
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})