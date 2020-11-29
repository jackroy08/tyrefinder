import http from 'http';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser'
import  {getCollectionDocuments, getCollectionDocumentsFiltered} from './database.js'

const app = express();

app.use(cors())
app.use(bodyParser.json())

let tyres = [];
let brand = "";

app.get('/', async (request, response) => {
    
    const tyres = await getCollectionDocuments('Tyres')
    response.send(tyres);
});


app.get('/search', async (request, response) => {
    const search = request.query.brand;
    const tyres = await getCollectionDocumentsFiltered('Tyres' , search)
    response.send(tyres);
});


// const http = require('http');

// const server = http.createServer((request, response) => {
//   response.end('Hello from my node api:')
// })

app.listen(8080);