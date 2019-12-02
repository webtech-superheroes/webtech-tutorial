const db = require("./db")
const Etl = require("./etl")

const etl = new Etl();

(async () => {
    etl
    .extract.from('./data/companies_ro_saas_2019-11-15.csv')
    .transform.to((el) => {
        return {
            name: el['Organization Name'],
            url: el['Organization Name URL']
        }
    }).load.into(db.models.Company)
    await etl.execute();
})()