 var referredBy = document.getElementById('referredBy');
 const ipc = require('electron').ipcRenderer;
 var lastPatientId = 0;
getDocters(function(err, data, info){
  if(err){
    console.log(info);
  }
  else{
    data.forEach(function(eachData){
      var option = document.createElement("option");
                  option.value = eachData.docter_id;
                  option.text = eachData.name;
                  referredBy.add(option);
    });
  }
});

getLastPatient(function(err, data, info){
  if(err){
    console.log(info);
  }
  else{
   lastPatientId = data[0].patient_id;
  }
});

$(function () {
    $('#date').datetimepicker();
});

var btnSave = document.getElementById('save');
var msg = document.getElementById('message');

const ipcRenderer = require("electron").ipcRenderer;
     // cannot send message to other windows directly https://github.com/electron/electron/issues/991
     function sendCommandToWorker(content) {
         ipcRenderer.send("printPDF", content);
     }

btnSave.addEventListener('click' , function(){

 var date = new Date($("#date").val());
 var createDate = new Date();

 var patient ={
    name : $("#name").val(),
    age : $("#age").val(),
    sex : $("#sex option:selected").text(),
    test : $("#test option:selected").text(),
    fees : $("#fees").val(),
    date : date,
    docter_id : $("#referredBy option:selected").val(),
    referred_by : $("#referredBy option:selected").text(),
    create_date : createDate
 };

  insertPatientEntry(patient, function(result, val){
    if(result){
      msg.className='alert alert-success text-center show';
      msg.innerHTML = 'Success';
      sendCommandToWorker('<div><p> Serial Number :' + (lastPatientId+1) +'</p> <p> Patient Name :' + patient.name +'</p> <p> Age :' +  patient.age +'</p> <p> Gender :' +  patient.sex +'</p> <p> Test :' +  patient.test +'</p> <p> Date :' +  patient.date +'</p> <p> Fees :' +  patient.fees +'</p></div>');
      setTimeout(function() {
                        $('#message').removeClass('show').fadeOut('fast').hide();
                        location.href = 'home.html';
                      }, 2000);
    }
    else{
      msg.className='alert alert-danger text-center show';
      msg.innerHTML = 'Fail to save entry';
      setTimeout(function() {
                        $('#message').removeClass('show').fadeOut('fast').hide();
                      }, 2000);
    }
  });
});
