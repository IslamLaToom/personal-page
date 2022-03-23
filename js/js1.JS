function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "eslamtom29@gmail.com",
        Password : "esl@2020",
        To : 'eslamtom29@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name: " + document.getElementById("name").value
    }).then(
      message => alert(message)
    );
} 

var email = document.getElementById("email");
var str = document.getElementById("strenght");

email.addEventListener('input', () => {
  if(email.value.length > 0){
    msg.style.display = "block" ;
  }
  else{
    msg.style.display = "none" ;
  }

  ///

  if(email.value.length < 6){
    str.innerHTML= "weak";
    email.style.border
  }
  else if(email.value.length >= 6 && email.value.length < 8){
    str.innerHTML = "medium";
  }
  else if(email.value.length >= 8){
    str.innerHTML = "strong";
  }
})

// const sec = document.querySelector('#body');
const toggea = document.querySelector('.toggea');
toggea.onclick = function(){
  sec.classList.toggea('dark')
}

