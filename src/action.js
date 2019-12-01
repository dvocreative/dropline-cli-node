const Connection = require('./connection.js');

module.exports = class Action {

    constructor(data) {

        this._data = data;
        this.id = data.system_name;

        this.connection = new Connection();

    }

    request(parameters) {



    }

    validate(parameters) {

        let valid = true;

        this._data.parameters.forEach(parameter => {
            if (parameter.token) {
                if (parameters[parameter.system_name]) {
                    if (typeof parameters[parameter.system_name] !== parameter.token.type.toLowerCase()) {
                        valid = false;
                    }
                }
            }
        });

        return valid;

    }

};