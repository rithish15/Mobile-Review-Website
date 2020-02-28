function loginValid() {
console.log("he");
  var email = $('#inputemail').val();
  var pass = $('#inputpassword').val();
  var flag = 0;
  $.getJSON('users.JSON', function(data) {
      console.log("heyyyy");
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