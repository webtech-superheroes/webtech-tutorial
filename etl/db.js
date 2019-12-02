const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('segments', 'root', 'pass', {
    dialect: 'mysql',
    host: '127.0.0.1'
})

//defines a new model
class Company extends Model {}

//table structure
Company.init({
    name: DataTypes.STRING,
    url: DataTypes.TEXT
}, { sequelize, modelName: 'company' })

var db = {
    sequelize: sequelize,
    models: {
        Company: Company
    }
};

(async () => {
    await sequelize.authenticate()
})();

module.exports = db