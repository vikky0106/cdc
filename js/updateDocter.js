var btnSave = document.getElementById('save');
var msg = document.getElementById('message');
var docter_id = 0;
const storage = require('electron-json-storage');
  storage.get('docter_id', function(error, data) {
  if (error) throw error;
  console.log(data);
  getDocterById(data,function(err, data, info){
  if(err){
    console.log(info);
  }
  else{
    var doctertData = data[0];
     docter_id = doctertData.docter_id;
     $("#name").val(doctertData.name);
     $("#degree").val(doctertData.degree);
     $("#phone").val(doctertData.phone);
     $("#alternate_number").val(doctertData.alternate_number);
  }
   });
});

btnSave.addEventListener('click' , function(){

 var date = new Date($("#date").val());
 var createDate = new Date();

 var docter ={
    name : $("#name").val(),
    degree : $("#degree").val(),
    phone : $("#phone").val(),
    alternate_number :  $("#alternate_number").val(),
    create_date : createDate
 };

  updateDocterById(docter_id,docter, function(err,result, info){
    if(result){
      msg.className='alert alert-success text-center show';
      msg.innerHTML = 'Success';
      location.href = 'docter.html';
    }
    else{
      msg.className='alert alert-danger text-center show';
      msg.innerHTML = 'Fail to save entry';
    }
  });
});
