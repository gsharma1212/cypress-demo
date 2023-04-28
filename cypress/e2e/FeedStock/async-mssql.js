import { result } from 'cypress/types/lodash';
import { on, connect, close } from 'mssql';

const config = {
server: "10.10.10.88",
port: 1433,
user: "AppUAT_Account",
password: "7SkvsT*5$@nYFWz6",
database: "ENTERPRISE",
options: {
enableArithAbort: true,
},
connectionTimeout: 15000,
pool: {

    max: 10,
    min: 0,
    idleTimeoutMills: 30000,
},
};

on('error', err => {
console.log(err.message)
})

//Async Await
it('check all mandatory fields',async function getDBUsersAsyncFunction(){
      try{
let pool = await connect(config)
let result1 = await pool.request().query("Select * FROM [TFS].[CM_Deals]");
console.log(result1);
            close();
      } catch (error) {
        console.log(err.message);
        close();

      }


})



