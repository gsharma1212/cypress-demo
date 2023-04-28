/// <reference types="cypress" />

/** 
 * @type {cypress.pluginConfig}
 * */
// eslint-disable-next-line no-unused-vars
module.exports = (on,config) => {
    //'on' is used to hook into various events Cypress emits
    //'config' is teh resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

const xlsx = require('node-xlsx').default;
//const { config, reject } = require('cypress/types/bluebird');
const fs = require('fs');//for file
const path = require('path'); //for filr path
module.exports = (on, config) => {
    on('task', { parseXlsx({ filepath })
    {return new Promise((resolve, reject) =>
        {try
        {
const jsonData = xlsx.parse(fs.readFileSync(filepath));
resolve(jsonData);
 } catch (e)
 {
    reject(e);
 }
  });
}}); }
const readXlsx = require('./read-xlsx')

const sqlServer = require('cypress-sql-server');

module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
}


module.exports = (on, config) => {
    on('task', {'readXlsx' : readXlsx.read}); //read Excel
     on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
    // on('task', {sqlServer : sqlServer.loadDBPlugin(config.db)});
}



