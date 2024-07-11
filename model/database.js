import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vote',
    password:'123456'
  });

  
    const testconnection = connection.query("select * from users where 1=1")
    .then(()=>{
        console.log('success')
    })
  

