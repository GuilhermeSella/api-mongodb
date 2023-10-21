const {MongoClient} = require("mongodb")

const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri)

async function Run(){
    try{
        await client.connect()
        console.log("Conectado ao mongoDb")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = client;