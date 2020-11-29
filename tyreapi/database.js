import mongodb from 'mongodb';
const mongoClient = mongodb.MongoClient;


let dbName = "Tyre_db";

const uri = "mongodb+srv://test:test123456@cluster0.kyoqm.mongodb.net/Tyre_db?retryWrites=true&w=majority";
export const getCollectionDocumentsFiltered = async (collectionName, search) => {
    const mongo = await mongoClient.connect(uri, { useUnifiedTopology: true })
    const dataCollection = await mongo.db(dbName).collection(collectionName).find({brand: search}).toArray();
    mongo.close();
    
    return dataCollection;
}


export const getCollectionDocuments = async (collectionName) => {
    const mongo = await mongoClient.connect(uri, { useUnifiedTopology: true })
    const dataCollection = await mongo.db(dbName).collection(collectionName).find({}).toArray();
    mongo.close();
    return dataCollection;
}