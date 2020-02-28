var number;

var name = '';


function registerfirstvalid()
{
  console.log("hello");
  name = $('#name').val();
  email = $('#email').val();
  password1 = $('#password').val();
  password2 = $('#confirm_password').val();

  console.log(name,email,password1);


  $.getJSON('users.json', function(data) {

    console.log("entered user");
    var addData = {
      [name]: {
        "name": name,
        "email": email,
        "pwd": password1}
    };
    $.extend(true, data, addData);

    console.log('GET COMPLETE', addData, data);

    var newData = JSON.stringify(data);

    console.log(newData)
    
    jQuery.post('signup.php', {
        newData: newData
    });
    console.log('SAVE COMPLETE');
  });

}


$(document).ready(function() {
    $("#userForm").validate({
    rules: {
    name: "required",
            email: {
                email: true,
                required: true
                
            }, 
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                equalTo: "Please enter the same password as above"
            },
        },
         submitHandler: function(form) {
          console.log("registerfirstvalid")
          registerfirstvalid();
        }});
      return false;
});


function loginValid() {

  var email = $('#inputemail').val();
  var pass = $('#inputpassword').val();
  var flag = 0;
  window.location="carousel.html";
  $.getJSON('users.JSON', function(data) {
  console.log('wrkj');

      try{
            $.each( data, function( index, details)
            {
              if(data[index].email == email && data[index].pwd == pass)
              {
                console.log("Success");
                flag = 1;
              }
            });
            if(flag ==1 )
            {
            window.location="carousel.html";
            }
            if(flag == 0){
              $('#loginerror').html("Invalid Username/Password");
            }
      }
      catch (e){

      }
  });
}


