var docter = document.getElementById('docter');
getDocters(function(err, data, info){
 if(err){
   console.log(info);
 }
 else{
   data.forEach(function(eachData){
     var option = document.createElement("option");
                 option.value = eachData.docter_id;
                 option.text =  eachData.name + ' (' +eachData.degree +')';
                 docter.add(option);
   });
 }
});
$( "#printData" ).click(function() {
 sendCommandToWorker(table.innerHTML);
});
var table = document.getElementById("reports");
$('#save').on('click',function(){
  var tblBody = document.getElementById("tbody");
  $("tbody").children().remove();
  var testArray = [];
  $("#test :selected").each(function (i,sel) {
    testArray.push($(sel).text());
   });

   var startDateParts =$("#startDate").val().split('/');
   var startDate = new Date(startDateParts[2],startDateParts[1]-1,startDateParts[0]);

   var parts =$("#endDate").val().split('/');
   var endDate = new Date(parts[2],parts[1]-1,parts[0]);
   endDate.setDate(endDate.getDate() + 1);

  var reportsParameter ={
     docter : $("#docter option:selected").val(),
     test : testArray,
     startDate : startDate,
     endDate :  endDate
  };
  getReportData(reportsParameter,function(err, data, info){
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
                //  cell0.style.display = 'none';

                     cell0.innerHTML = eachData.name;
                     cell0.style=" width: 25%;"
                     cell1.innerHTML = eachData.test;
                     cell1.style=" width: 10%;"
                     cell2.innerHTML = eachData.referred_by;
                     cell2.style=" width: 30%;"
                      var d1 = new Date(eachData.date);
                     var date = d1.getDate();
                     var month = d1.toLocaleString("en-us", { month: "short" });
                     var year = d1.getFullYear();
                     cell3.innerHTML = date+" "+month+","+year;
                     cell3.style=" width: 20%;"
                     cell4.innerHTML = eachData.fees;
                     totalfees = totalfees + eachData.fees;
                     cell4.style=" width: 15%;"
                     tblBody.appendChild(row);
                     table.appendChild(tblBody);
                    i++;
             if(i === data.length){
               var row = table.insertRow(-1);
               var cell0 = row.insertCell(0);
               var cell1 = row.insertCell(1);
               var cell2 = row.insertCell(2);
               var cell3 = row.insertCell(3);
               var cell4 = row.insertCell(4);
               cell0.innerHTML = 'Total'.bold();
               cell4.innerHTML = totalfees;
               cell4.style.fontWeight = bold;
               tblBody.appendChild(row);
               table.appendChild(tblBody);
             }
         });
     }
  });

//printData();
})
