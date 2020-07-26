function validate(){
  var choice = document.getElementById('check').checked;
  var word = document.getElementById('caption').value;

  if ((choice==true) && (word=="recaptcha")){
    return true;
  }
    document.getElementById('final').innerHTML="Not Authorized try again.";
    return false;

}
