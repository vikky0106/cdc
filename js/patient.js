var table = document.getElementById("reports");
  var tblBody = document.getElementById("tbody");
  $("tbody").children().remove();
  getPatients(function(err, data, info){
     if(err){
       console.log(info);
     }else{
          var i =0, totalfees =0;
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

                  var cell5 = row.insertCell(5);
                  cell5.className="edit-trash-icon";


                  var cell6 = row.insertCell(6);
                  cell6.style.display = 'none';
                  cell6.innerHTML = eachData.patient_id;

                  var edit = document.createElement('img');
                     edit.src = "img/edit.png";
                     edit.alt="edit";
                     var editLink = document.createElement("a");
                     editLink.title='Edit';
                     editLink.appendChild(edit);
                     editLink.href="updatePatient.html";

                var deletePatient = document.createElement('img');
                     deletePatient.src="img/trash.png";
                     deletePatient.title='Delete';
                     deletePatient.alt="trash";

                     cell5.appendChild(editLink);
                     cell5.appendChild(deletePatient);
                     cell5.className = 'text-center';

              deletePatient.onclick = function(target){
                 var result = confirm("Do you want to delete this patient ?");
                 if(result){
                   var cell6 =  target.currentTarget.parentElement.parentElement.cells[6];
                   deletePatientById(cell6.textContent,function(err, data, info){
                        if(err){
                          console.log(info);
                        }
                        else{
                        console.log('sucess');
                        }
                      });
                   location.href = 'home.html';
                 }
                 else{
                   return;
                 }
             }

                      row.onclick = function(target){
                        var cell6 = target.currentTarget.cells[6];
                       const storage = require('electron-json-storage');
                       storage.set('patient_id', cell6.textContent, function(error) {
                          if (error) throw error;
                        });   
                    };

                     cell0.innerHTML = eachData.name;
                  
                     cell1.innerHTML = eachData.test;
                     
                     cell2.innerHTML = eachData.referred_by;
                     
                      var d1 = new Date(eachData.date);
                     var date = d1.getDate();
                     var month = d1.toLocaleString("en-us", { month: "short" });
                     var year = d1.getFullYear();
                     cell3.innerHTML = date+" "+month+","+year;
                     cell3.className = 'text-center';
                     cell4.innerHTML = '&#8377;' +eachData.fees;
                     totalfees = totalfees + eachData.fees;
                     tblBody.appendChild(row);
                     table.appendChild(tblBody);
                    i++;
             if(i === data.length){
                      $("#reports").dataTable();
             }
         });
     }
});
