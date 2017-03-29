var mysql      = require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : '127.0.0.1',
    user     : 'root',
    password : 'vikas',
    database : 'city',
    debug    :  false
});

function isAuthenticated(username, password,callback){
     var result = false;
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return callback(false);
        }

        connection.query("select * from users where username=?",[username],function(err,rows){
          //connection.release();
            if(!err) {
                if(rows && rows.length>0 && rows[0].password === password){
                //  connection.release();
                  return callback(true, rows);
                }
                else{
                  connection.release();
                  return callback(false, 'failed login');
                  }
                }
                else{
                  connection.release();
                  return callback(false, 'failed login');
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function insertPatientEntry(patient,callback){
    pool.getConnection(function(err,connection){
        if (err) {
        //  connection.release();
          console.log('Error in connection database');
          return;
        }

        connection.query('Insert into patient set ?',patient,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows){
                  connection.release();
                  return callback(true, rows);
                }
                }
                else{
                    connection.release();
                  return callback(false, err);
                }

        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function insertDocter(docter,callback){
    pool.getConnection(function(err,connection){
        if (err) {
       //   connection.release();
          console.log('Error in connection database');
          return;
        }

        connection.query('Insert into docter set ?',docter,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows){
                  connection.release();
                  return callback(true, rows);
                }
                }
                else{
                    connection.release();
                  return callback(false, err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}



function getReportData(parameters,callback){
    pool.getConnection(function(err,connection){
        if (err) {
        //  connection.release();
          console.log('Error in connection database');
          return;
        }
        var queryString ;
         if(parameters.docter){
            queryString = 'Select * from patient where docter_id ='+mysql.escape(parameters.docter)+  'and date BETWEEN '+ mysql.escape(parameters.startDate)+' AND '+mysql.escape(parameters.endDate) +'AND test IN (' +mysql.escape(parameters.test)+')';
         }
         else{
           queryString = 'Select * from patient where date BETWEEN'+ mysql.escape(parameters.startDate)+' AND '+mysql.escape(parameters.endDate) +'AND test IN (' +mysql.escape(parameters.test) + ')';
         }

        connection.query(queryString,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,rows,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }

        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}

function getDocters(callback){
    pool.getConnection(function(err,connection){
        if (err) {
          //connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Select * from docter',function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function getPatients(callback){
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Select * from patient',function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function getPatientById(id,callback){
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Select * from patient where patient_id=?',id,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}

function deletePatientById(id,callback){
    pool.getConnection(function(err,connection){
        if (err) {
        //  connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Delete from patient where patient_id=?',id,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function updatePatientById(id,patient,callback){
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Update patient set  ? where patient_id=?',[patient,id],function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.affectedRows>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}

function getLastPatient(callback){
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Select * from patient ORDER BY patient_id desc LIMIT 1',function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}

function getDocterById(id,callback){
    pool.getConnection(function(err,connection){
        if (err) {
         // connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Select * from docter where docter_id=?',id,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}

function deleteDocterById(id,callback){
    pool.getConnection(function(err,connection){
        if (err) {
        //  connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Delete from docter where docter_id=?',id,function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.length>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}


function updateDocterById(id,docter,callback){
    pool.getConnection(function(err,connection){
        if (err) {
        //  connection.release();
          console.log('Error in connection database');
          return;
        }
        connection.query('Update docter set  ? where docter_id=?',[docter,id],function(err,rows){
            //connection.release();
            if(!err) {
                if(rows && rows.affectedRows>0){
                  connection.release();
                  return callback(false,rows, 'data available');
                }
                else{
                  connection.release();
                  return callback(false,null,'no data available');
                }
                  }
                else{
                  connection.release();
                  return callback(true,'error',err);
                }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
    });
}