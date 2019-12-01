const axios = require('axios');

module.exports = class Connection {

    constructor(host) {

        this.host = host;

    }

    get(url, params) {

        const data = {};

        if (params) {
            data['params'] = params;
        }

        return axios.get(this.host + url, data);

    }

    post(url, data) {

        return axios.post(this.host + url, data);

    }

};