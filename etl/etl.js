const csv = require("csvtojson");

class Etl {

    constructor() {
        this.extract = this
        this.transform = this
        this.load = this

        this.destination = null
        this.source = null
        this.map = null
        
        this.rawData = null
        this.processedData = null;
    }

    extractData() {
        console.log('Started extraction')
        return new Promise(async (resolve, reject) => {
            try {
                this.rawData = await csv().fromFile(this.source)
                console.log('Finished extraction')
                resolve(this.rawData)
            } catch(err) {
                reject(err)
            }
        })
        
    }

    transformData() {
        console.log('Started transformation')
        if(this.map != null) {
            this.processedData = this.rawData.map(this.map)
        } else {
            this.processedData = this.rawData
        }
        console.log('Finished transformation')
    }
    
    loadData() {
        console.log('Started load')
        this.processedData.forEach(async (el) => {
            await this.destination.create(el)
        })
        console.log('Finished load')
    }

    from(source) {
        console.log(source)
        this.source = source;
        return this;
    }

    to(map) {
        this.map = map;
        return this;
    }

    into(destination) {
        this.destination = destination
        return this;
    }

    async execute() {
        await this.extractData();
        this.transformData()
        await this.loadData()
    }
}

module.exports = Etl;