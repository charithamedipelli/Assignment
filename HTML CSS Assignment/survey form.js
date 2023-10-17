function submitForm() {
  // Get values from the form
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const dateOfBirth = document.getElementById('date-of-birth').value;
  const country = document.getElementById('country').value;
  const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
  const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.value).join(", ");
  const profession = document.getElementById('profession').value;
  const email = document.getElementById('email').value;
  const mobileNumber = document.getElementById('mobile-number').value;   

    
    
  // Check if any of the fields are empty
  if (!firstName || !lastName || !dateOfBirth || !country || genderCheckboxes.length === 0 || !profession || !email || !mobileNumber) {
    alert("Please fill in all the required fields.");
  } 
  else {
    // Display the submitted data in the popup
    document.getElementById('popup-first-name').textContent = firstName;
    document.getElementById('popup-last-name').textContent = lastName;
    document.getElementById('popup-date-of-birth').textContent = dateOfBirth;
    document.getElementById('popup-country').textContent = country;
    document.getElementById('popup-gender').textContent = genderValues;
    document.getElementById('popup-profession').textContent = profession;
    document.getElementById('popup-email').textContent = email;
    document.getElementById('popup-mobile-number').textContent = mobileNumber;

    isValid =true;
    if (!firstName || !isValidFirstName(firstName)) {
      alert("Please enter a valid FirstName(only characters are allowed).");
      isValid = false;
    }   
    
    if (!lastName || ! isValidLastName(lastName)) {
      alert("Please enter a valid LastName(only characters are allowed).");
      isValid = false;
    }   
    
    if (!profession || !isValidProfession(profession)) {
      alert("Please enter a valid profession(only characters are allowed).");
       isValid = false;
     }
      
    // email validation using regular expression
    if (!email || !isValidEmail(email)) {
     alert("Please enter a valid Email.");
      isValid = false;
    }

    // Mobile number validation using regular expression
    if (!mobileNumber || !isValidMobileNumber(mobileNumber)) {
      alert("Please enter 10digit Mobile Number.");
      isValid = false;
    }
     
    //If all validations pass, show a submit popup
    if (isValid) {
      if (submitForm){
       //proceed with the form submissiion
       //show popup
        document.getElementById('popup').style.display = 'block';
        //reset of the code remains sam

       }
    }
  }
}    

function isValidFirstName(firstName) {
  const firstNamePattern = /^[A-Za-z]+$/;

  return firstNamePattern.test(firstName);
}

function isValidLastName(lastName) {
  const lastNamePattern = /^[A-Za-z]+$/;

  return lastNamePattern.test(lastName);
}

function isValidProfession(profession) {
  // Simple email validation regex (for demonstration)
  const professionPattern = /^[A-Za-z]+$/;
  
  return professionPattern.test(profession);
}


function isValidEmail(email) {
  // Simple email validation regex (for demonstration)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  return emailPattern.test(email);
}
  
function isValidMobileNumber(mobileNumber) {
  // Simple mobile number validation regex (10 digits)
  const mobileNumberPattern = /^\d{10}$/;

  return mobileNumberPattern.test(mobileNumber);
} 

function closePopup() {
  // Close the popup and reset the form
  document.getElementById('popup').style.display = 'none';
  document.getElementById('survey-form').reset();
}
  
function resetForm() {
  // Reset the form
  document.getElementById('survey-form').reset();
}


  