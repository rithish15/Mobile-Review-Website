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
        "pwd": password1
      }
    };
    $.extend(true, data, addData);

    console.log('GET COMPLETE', addData, data);

    var newData = JSON.stringify(data);
  
    jQuery.post('signup.php', {
        newData: newData
    });
    console.log('SAVE COMPLETE');
  });
  window.open("login.html");
}