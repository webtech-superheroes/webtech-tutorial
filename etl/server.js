const express = require("express")
const app = express()
const db = require('./db')

app.use(express.static('./frontend'))

app.get('/api/companies', async (req, res) => {
    var companies = await db.models.Company.findAll();
    res.status(200).json(companies);
})

app.post('/api/companies', async (req, res) => {
    
})

app.listen(8080)