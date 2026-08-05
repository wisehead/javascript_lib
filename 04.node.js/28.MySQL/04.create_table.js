var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : '10.27.77.146',
  user     : 'root',
  password : '123456',
  port: '3306',
  database: 'test'
});

connection.connect();

var  createSql = 'CREATE TABLE IF NOT EXISTS websites(' +
                 'Id INT NOT NULL AUTO_INCREMENT,' +
                 'name CHAR(20) NOT NULL DEFAULT \'\',' +
                 'url VARCHAR(255) NOT NULL DEFAULT \'\',' +
                 'alexa INT NOT NULL DEFAULT 0,' +
                 'country CHAR(10) NOT NULL DEFAULT \'\',' +
                 'PRIMARY KEY(Id)' +
                 ') ENGINE=InnoDB DEFAULT CHARSET=utf8';
//建表
connection.query(createSql,function (err, result) {
        if(err){
         console.log('[CREATE TABLE ERROR] - ',err.message);
         return;
        }

       console.log('--------------------------CREATE TABLE----------------------------');
       console.log('CREATE TABLE RESULT:',result);
       console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
