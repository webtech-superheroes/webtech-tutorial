const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('profile', 'root', '', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log(err)
    console.log("Unable to connect to database")
})

const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})

const app = express()

app.get('/createdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables')
    })
})

app.use(express.json())
app.use(express.urlencoded())

app.post('/messages', (request, response) => {
    Messages.create(request.body).then((result) => {
        request.status(201).json(result)
    }).catch((err) => {
        request.status(500).send("resource not created")
    })
})

app.use('/', express.static('public'))

app.listen(8080)