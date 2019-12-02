const csv = require("csvtojson");
const db = require("./db")

function extract() {
    return new Promise(async (resolve, reject) => {
        try {
            companies = await csv().fromFile('./data/companies_ro_saas_2019-11-15.csv')
            resolve(companies)
        } catch(err) {
            reject(err)
        }
    })
}

function transform(results) { 
    return results.map((el) => {
        return {
            name: el['Organization Name'],
            url: el['Organization Name URL']
        }
    })
}

async function load(results) {
    results.forEach(async (el) => {
        await db.models.Company.create(el)
    })
}

(async () => {
    results = transform(await extract());
    await load(results)
    console.log(results)
})()