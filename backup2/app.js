$(document).ready(function(){



  $("#empForm").on("submit", function(event){

    event.preventDefault();





    var values = {};

    var empData = false;
    var strCheck = "";

    //fetch form values
    $.each($("#empForm").serializeArray(), function(i, field){
      values[field.name] = field.value;

      strCheck = field.value;

      if (strCheck.length >0){

        empData = true;
      };
    });

    console.log("values = " + values);

    if (empData){
      empArray.push(values);
    };


    //clear out form values
    $("#empForm").find("input[type=text]").val("");


    listEmployees();


  });


});

//function

function delEmp(){

  console.log("in del emp");

  //var delIndex = $(this).parent().children('.id').text();

  var delIndex = $(this).parent().data("myIndex");

  console.log("del index"+ delIndex);

  empArray.splice(delIndex,1);

  console.log(empArray);

  listEmployees();

  //console.log('I want to delete!' + delIndex);
};


function listEmployees(){
  //total Salary
  var totalSalary = 0;
  var monthSalary = 0;
  var annualSalary = 0;
  //remove all existing from dom

  $('.employee').remove();

  for (var i=0; i<empArray.length; i++){

    annualSalary = parseInt(empArray[i].empAnnualSalary);
    if (isNaN(annualSalary)){
      annualSalary =0;
    }

    totalSalary += parseInt(annualSalary);

    console.log("total salary"+annualSalary);

     $('.empContainer').append('<div class="employee"></div>');
     var $el = $('.empContainer').children().last();

     $el.data("myIndex", i);

     $el.append('<p>' + "First Name:  " + empArray[i].empFirstName + '</p>');
     $el.append('<p>' + "Last Name:  " + empArray[i].empLastName + '</p>');
     $el.append('<p class = "id">' + "ID number:  " + empArray[i].empIdNumber + '</p>');
     $el.append('<p>' + "Title:  " + empArray[i].empTitle + '</p>');
     $el.append('<p>' + "Annual Salary:  " + empArray[i].empAnnualSalary + '</p>');
     $el.append('<input class = "delEmp" val = "' + i + '" type = "submit"  value = "Delete" id="empDel' + i +'">');
  }

  //loop done
  //calc and display month salary
  monthSalary = Math.round(totalSalary / 12);

  if (isNaN(monthSalary)){
    monthSalary = 0;
  }
  $('#showSal').text('$' + monthSalary);

  // $el = $('.empContainer').children().last();
  // $el.append('<p>Total monthly salary: >' + monthSalary + '</p>');

  $( ".delEmp" ).on( "click", delEmp);

};


var empArray = [];
