const apiHost = 'https://dropline.io/api';
const Contract = require('./src/contract.js');
const Connection = require('./src/connection.js');

module.exports = {

    fetchContract : async (contractId, options) => {

        const cloud = new Connection((options && options.host) ? options.host : apiHost);

        const contractData = await cloud.get('/contract/' + contractId);

        return new Contract(contractData.data, options);

    }

};