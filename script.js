document.getElementById("signup").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
  
    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
  

    fullnameError.textContent = "";
    emailError.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";
    dobError.textContent = "";
    genderError.textContent = "";
  

    let isValid = true;
  
    if (!fullname) {
      fullnameError.textContent = "Full Name is required.";
      isValid = false;
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }
 
    if (!username) {
      usernameError.textContent = "Username is required.";
      isValid = false;
    } else if (username === fullname) {
      usernameError.textContent = "Username should not match Full Name.";
      isValid = false;
    } else if (username.length < 3) {
      usernameError.textContent = "Username must be at least 3 characters.";
      isValid = false;
    }
  

    if (!password) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 8 || password.length > 15) {
      passwordError.textContent = "Password must be 8-15 characters long.";
      isValid = false;
    }
  
    if (!dob) {
      dobError.textContent = "Date of Birth is required.";
      isValid = false;
    }
  
    if (!gender) {
      genderError.textContent = "Please select a gender.";
      isValid = false;
    }
  
  
    if (isValid) {
      console.log("Full Name:", fullname);
      console.log("Email:", email);
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Date of Birth:", dob);
      console.log("Gender:", gender.value);
  
      alert("Signup Successful!");
      document.getElementById("signup").reset(); 
    }
  });
  