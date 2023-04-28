const { defineConfig } = require('cypress');
const sqll = require("mssql");

//const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
//import sqlServer from 'cypress-sql-server';
const { beforeRunHook, afterRunHook } = require('cypress-sql-server');
module.exports = defineConfig({
  reporter: 'cypress-sql-server',

  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      }),
      on("task", {
       READFROMDB({dbConfig, sql}){
const client = new sqll.ConnectionPool(dbConfig);
return client.query(sql);
}

      }),
    
      {
        "testFiles": "**/*.{feature,features}"
      }
      
     // setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config)
     // },
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },

  
   
      "DB": {
        host: "10.10.10.89",
        user: "AppUAT_Account",
        database: "ENTERPRISE",
        password: "7SkvsT*5$@nYFWz6",
        port: "1433",
        connectionTimeout: 10000,
pool: {

    max: 10,
    min: 0,
    idleTimeoutMills: 30000,
},
}

    }
  }
  
  
)

