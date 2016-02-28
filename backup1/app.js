$(document).ready(function(){


  $("#empForm").on("submit", function(event){

    event.preventDefault();

    var values = {};

    //fetch form values
    $.each($("#empForm").serializeArray(), function(i, field){
      values[field.name] = field.value;
    });

    console.log("values = " + values);

    empArray.push(values);


    //clear out form values
    $("#empForm").find("input[type=text]").val("");
    //$("#catForm").find("input[type=text]").val("");

    //console.log(empArray);

    listEmployees();

  });

  //console.log("here I am");
});
var empArray = [];

function listEmployees(){

  //remove all existing

  $('.employee').remove();

  
  for (var i=0; i<empArray.length; i++){
    console.log("i= " + i);
    console.log(empArray[i]);





     $('.empContainer').append('<div class="employee"></div>');

     var $el = $('.empContainer').children().last();

     $el.append('<p>' + "First Name:  " + empArray[i].empFirstName + '</p>');
     $el.append('<p>' + "Last Name:  " + empArray[i].empLastName + '</p>');
     $el.append('<p>' + "ID number:  " + empArray[i].empIdNumber + '</p>');
     $el.append('<p>' + "Title:  " + empArray[i].empTitle + '</p>');
     $el.append('<p>' + "Annual Salary:  " + empArray[i].empAnnualSalary + '</p>');
     $el.append('<input type = "submit" value = "' + i + '">');






  }




};
