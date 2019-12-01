const Action = require('./action.js');

module.exports = class Contract {

    constructor(data, options) {

        this._data = data;

        this.actions = data.actions.map(_action => {
            return new Action(_action);
        });

    }

    getAction(id) {

        return this.actions.find(action => {
            return (action.id && action.id === id);
        });

    }

    getActions() {

        return this.actions;

    }

};