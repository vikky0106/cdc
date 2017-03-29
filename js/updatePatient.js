 var referredBy = document.getElementById('referredBy');
 var patient_id = 0;
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
 const storage = require('electron-json-storage');
  storage.get('patient_id', function(error, data) {
  if (error) throw error;
  console.log(data);
  getPatientById(data,function(err, data, info){
  if(err){
    console.log(info);
  }
  else{
    var patientData = data[0];
     patient_id = patientData.patient_id;
     $("#name").val(patientData.name);
     $("#age").val(patientData.age);
     $("#sex option:selected").text(patientData.sex);
     $("#test option:selected").text(patientData.test);
     $("#fees").val(patientData.fees);
     $("#date").val(patientData.date);
    $("#referredBy option:selected").val(patientData.docter_id);
    $("#referredBy option:selected").text(patientData.referred_by);
  }
   });
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

  updatePatientById(patient_id,patient, function(err,result, info){
    if(result){
      msg.className='alert alert-success text-center show';
      msg.innerHTML = 'Success';
      sendCommandToWorker('<div><p> Serial Number :' + patient_id +'</p> <p> Patient Name :' + patient.name +'</p> <p> Age :' +  patient.age +'</p> <p> Gender :' +  patient.sex +'</p> <p> Test :' +  patient.test +'</p> <p> Date :' +  patient.date +'</p> <p> Fees :' +  patient.fees +'</p></div>');
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
