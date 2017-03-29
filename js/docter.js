var msg = document.getElementById('message');

function showAllDocter(){
  var table = document.getElementById("docters");
  var tblBody = document.getElementById("tbody");
  $("tbody").children().remove();
  getDocters(function(err, data, info){
     if(err){
       console.log(info);
     }else{
         var i =0;
         data.forEach(function(eachData){
             var row = table.insertRow(0);
             if(i%2 == 0){
                    row.className="odd";
                   }
                  var cell0 = row.insertCell(0);
                  var cell1 = row.insertCell(1);
                  var cell2 = row.insertCell(2);
                  var cell3 = row.insertCell(3);
                  var cell4 = row.insertCell(4);
                  cell4.className="edit-trash-icon";

                  var cell5 = row.insertCell(5);
                  cell5.style.display = 'none';
                  cell5.innerHTML = eachData.docter_id;

                  var edit = document.createElement('img');
                     edit.src = "img/edit.png";
                     edit.alt="edit";
                     var editLink = document.createElement("a");
                     editLink.title='Edit';
                     editLink.appendChild(edit);
                     editLink.href="updateDocter.html";

                 var deleteDocter = document.createElement('img');
                     deleteDocter.src="img/trash.png";
                     deleteDocter.title='Delete';
                     deleteDocter.alt="trash";

                   row.onclick = function(target){
                        var cell5 = target.currentTarget.cells[5];
                       const storage = require('electron-json-storage');
                       storage.set('docter_id', cell5.textContent, function(error) {
                          if (error) throw error;
                        });   
                    };

                deleteDocter.onclick = function(target){
                 var result = confirm("Do you want to delete this docter ?");
                 if(result){
                   var cell5 =  target.currentTarget.parentElement.parentElement.cells[5];
                   deleteDocterById(cell5.textContent,function(err, data, info){
                        if(err){
                          console.log(info);
                        }
                        else{
                        console.log('sucess');
                        }
                      });
                   location.href = 'docter.html';
                 }
                 else{
                   return;
                 }
             }

                     cell0.innerHTML = eachData.name;
                     cell0.style=" width: 20%;"
                     cell1.innerHTML = eachData.degree;
                     cell1.style=" width: 20%;"
                     cell2.innerHTML = eachData.phone;
                     cell2.style=" width: 20%;"
                      cell2.className = 'text-center';
                     cell3.innerHTML = eachData.alternate_number;
                     cell3.style=" width: 20%;"
                     cell3.className = 'text-center';
                     cell4.appendChild(editLink);
                     cell4.appendChild(deleteDocter);
                     cell4.className = 'text-center';
                     tblBody.appendChild(row);
                     table.appendChild(tblBody);
                     i++;
                     if(i === data.length){
                         $("#docters").dataTable();
                     }
         });
     }
  });

}
