
  
function scrollToTop() {
  document.documentElement.scrollTo({
    top:0,
    behavior: 'smooth'
  });
}

window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

//  signup form validation

  const validateForm = () => {
  let nameInput = document.getElementById('nameInput');
  const email = document.querySelector('#emailInput');
  const password = document.querySelector('#passwordInput');
  const confirmPassword = document.querySelector("#Confirm-password");
  const termsCheckbox = document.querySelector('#termsCheckbox');
  const validationMessage = document.querySelectorAll(".validationMessage");

//  /// console.log(name.value);
  document.querySelectorAll('.validationMessage').forEach(function(ele, index){
  
    ele.textContent = ''; // Clear validation content




  });

  document.querySelectorAll("input").forEach(function(input, index){
  input.style.border = "1px solid transparent";
 });
    
 nameInput.addEventListener('focus', function(){
nameInput.closest(".Input-row").getElementsByClassName("validationMessage")[0].innerText='';  
  
  //console.log(clo);

  //clo.innerText="d";
     
 });


// Regular expressions for validation
 const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


//  validate Name

  if(nameInput.value.length === 0){
  document.querySelector("#name-msg").textContent = "Name is required";
  document.querySelector("#nameInput").style.border ="1px solid #dc3545"
  return false;
 }
 
if(email.length === 0){
  document.querySelector("#email-msg").textContent = "Email is required";
  document.querySelector("#emailInput").style.border ="1px solid #dc3545"
  return false;
}

if(!email.match(emailRegex)){
  document.querySelector("#email-msg").textContent = "Please enter a valid email address";
  document.querySelector("#emailInput").style.border ="1px solid #dc3545"
  return false;
}

if( password.length === 0 || password.length < 8 || !password.match(passwordRegex)){
  document.querySelector("#password-msg").textContent = "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number";
  document.querySelector("#passwordInput").style.border = "1px solid #dc3545"
  return false;
}

if(password !== confirmPassword){
  document.querySelector("#confirm-password-msg").textContent = "Password does not match";
  document.querySelector("#confirm-password").style.border = "1px solid #dc3545"
  return false;
}

  // Check if terms of service checkbox is checked
  if (!termsCheckbox.checked) {
    document.querySelector("#termsCheckbox-msg").textContent = "Please agree to the terms of service";
    document.querySelector("#termsCheckbox").style.border = "1px solid #dc3545"
    return false;
  }

  return true;
}



// increse/deccrease counter


// const counterElement = document.querySelector("#counter");
// let counterValue = 0;

// function increaseCounter() {
//   counterValue++;
//   counterElement.textContent = " counterValue";
// }

// function decreaseCounter() {
//   if (counterValue > 0) {
//     counterValue--;
//     counterElement.textContent = "counterValue";
//   }
// }
// const counterElement = document.getElementById("counter");
// let counterValue = 0;

// function increaseCounter() {
//   counterValue++;
//   counterElement.t = counterValue;
//   return;
// }

// function decreaseCounter() {
//   if (counterValue > 0) {
//     counterValue--;
//     counterElement.textContent = counterValue;
//   }
//   return;
// }
