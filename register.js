
var number;

var name = '';


function registerfirstvalid()
{
  console.log("hello");
  name = $('#name').val();
  email = $('#email').val();
  password1 = $('#pwd1').val();
   password2 = $('#pwd2').val();
    number = $('#phonenumber').val();


  console.log(name,email,password1,number);


  $.getJSON('users.JSON', function(data) {

    console.log("entered user");
    var addData = {
      [name]: {
        "name": name,
        "email": email,
        "pwd": password1,
        "number":number
      }
    };
    $.extend(true, data, addData);

    console.log('GET COMPLETE', addData, data);

    var newData = JSON.stringify(data);
  
    $.ajax({
    type: "POST",
    url: "signup.php",
    data: newdata,
    success: function() {
      //display message back to user here
    }
  });
  window.open("carousel.html");
}

function SubmitFirstResponse()
{
  name = '';
  $("form[name='registration']").validate({
    rules: {
      name: "required",
      
      phonenumber: {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      email: {
        required: true,
        email: true
      },
      pwd1:{
        minlength: 5,
        required :true
      },
      pwd2: {
        minlength: 5,
        required: true,
        equalTo:pwd1
      },
      
    },

    messages: {
      name1: "Please enter Name",

      phonenumber: {
        required: "Please provide a number",
        minlength: "Mobile Number Should be 10-digit",
        maxlength:"Mobile Number Should not exceed 10-digit"
      },
        email: {
            required : "Enter Mail",
            required: "Enter Complete address"
        },
        pwd1: {
          minlength: "Passwords must be atleast 5 characters long",
          required: "Password is Required"
        },
        pwd2:{
            required: "Password is Required",
           equalTo: "Passwords doesn't match",
           minlength: "Passwords must be atleast 5 characters long"
        }
     },
    submitHandler: function(form) {
          registerfirstvalid();
        }});
      return false;
}


function loginValid() {

  console.log("login valid");

  var email = $('#InputEmail1').val();
  var pass = $('#InputPassword1').val();
  var flag = 0;
  $('#loginerror').html(" ");
  $.getJSON('users.JSON', function(data) {
      try{
            $.each( data, function( index, details)
            {

              if(data[index].email == email && data[index].pwd == pass)
              {
                console.log("Success");
                flag = 1;
              }
            });

            if(flag == 1)
            {
              console.log("Success");
              window.location="carousel.html";
           
            }

            if(flag == 0){
              alert("login error");
              $('#loginerror').html("Invalid Username/Password");
              console.log("failure");
            }
            
           
      }
      catch (e){

      }
  });
  

}


