const axios = require("axios")

const REQUEST_URL = 'https://api.github.com/search/repositories?q=webtech-profile&sort=updated';

function extract() {
    return new Promise(async (resolve, reject) => {
        let results = await axios.get(REQUEST_URL)
        return results['data'];
    })
}

function transform(results) {
    return results;
}

async function load(results) {
	console.log(results)
}

(async () => {
    let data = await extract()
})()