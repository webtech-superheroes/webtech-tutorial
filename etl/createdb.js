const db = require("./db")

db.sequelize.sync({force: true}).then(() => {
    console.log('tables created')
})