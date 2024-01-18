
// Open and close the nav
const openNav = () => {
      document.getElementById('myNav')
      .style.height="100%";
  }
  
  const closeNav = () => {
      document.getElementById('myNav')
      .style.height="0%";
  }
  
  // typed text
  let typed = new Typed(".typing", {
      strings: ["Automobiles", "Advancements", "Impact", "Trends"],
      typedSpeed: 60,
      backSpeed: 100,
      loop: true
  });

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Display the current year in the HTML span element
  document.getElementById('currentYear').textContent = currentYear;
  

//CONTACT FORM

// function to show and confirm password.
// it toggles the password
function Toggle() {
      var toggle = document.getElementById("typepass");
      if (toggle.type === "password") {
          toggle.type = "text";
      }
      else {
          toggle.type = "password";
      }
  }
  
  // function to validate the form
  function validate(){
      let Email = document.getElementById('email').value;
      let Username = document.getElementById('username').value;
      let Password  = document.getElementById('password').value;
  
      if (Username !== "James"){
          alert("Please Enter correct username!");
          return false;
      }
  
      if (Email !== "james123@gmail.com"){
          alert("Please Enter correct email");
          return false;
      }
  
      if (Password == ""){
          alert("Please enter correct password");
          return false;
      }
  
      // email pattern validation
      let emailPat = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
      let EmailmatchArray = Email.match(emailPat);
  
      if (EmailmatchArray == null){
          alert("Your Email Address Seems Incorrect. Please Try Again.");
          return false;
      }
  
      if(Username!== "" && Email!=="" && Password!=="" ){
          return true;
      }
  }
  