var btnSave = document.getElementById('save');
var msg = document.getElementById('message');

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

  insertDocter(docter, function(result, val){
    if(result){
      msg.className='alert alert-success text-center show';
      msg.innerHTML = 'Success';
    }
    else{
      msg.className='alert alert-danger text-center show';
      msg.innerHTML = 'Fail to save entry';
    }
  });
});
