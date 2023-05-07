function formValidation() {
  var fName = document.registration.fname.value;
  var mName = document.registration.mname.value;
  var lName = document.registration.lname.value;
  var ffName = document.registration.ffname.value;
  var mmName = document.registration.mmname.value; 
  var email = document.registration.email.value;
  var password = document.registration.password.value;
  var password1 = document.registration.password1.value;
  const gender = document.registration;
  const dob = document.registration;
  var phoneNumber = document.registration.phone.value;
  var country = document.registration.country_code1.value;
  var phoneNumber1 = document.registration.phone1.value;
  var address = document.registration.address.value;
  var jee = document.registration.jee.value;
  var cet = document.registration.cet.value;
  var rank = document.registration.Rank.value;
  var prn = document.registration.prn.value;
  var course = document.registration.course.value;
  var stream = document.registration.stream.value;
  const upfile = document.registration;

  var regName = /\d+$/;
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regpassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{11,}$/;
  var regPhone = /^[1-9][0-9]{9}$/;
  var regcountry = /\+[0-9]{1,6}$/;
  var regrank = /^[1-9][0-9]{0,3}$/;
  var regprn = /^[0-9]{8}$/;

  if(fName.length<2 || fName.length>20){
  alert("First-Name length should be more than 2 and less than 21 charaters");
  document.getElementById("fname").focus();
  return false;
  }

  if(regName.test(fName)){
  alert("First-Name should contain only string of alphabets");
  document.getElementById("fname").focus();
  return false;
  }

  if(regName.test(mName)){
  alert("Middle-Name should contain only string of alphabets");
  document.getElementById("mname").focus();
  return false;
  }

  if(lName.length<2 || lName.length>20){
  alert("Last-Name length should be more than 2 and less than 21 charaters");
  document.getElementById("lname").focus();
  return false;
  }

  if(regName.test(lName)){
  alert("Last-Name should contain only string of alphabets");
  document.getElementById("lname").focus();
  return false;
  }

  if (dob.dob.value === "") {
    alert("Please enter your date of birth!");
    document.getElementById("dob").focus();
    return false;
  }
 
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    document.getElementById("gender").focus();
    return false;
  }

  if(ffName.length<2 || ffName.length>40){
    alert("Father's-Name length should be more than 2 and less than 41 charaters");
    document.getElementById("ffname").focus();
    return false;
    }
  
  if(regName.test(ffName)){
    alert("Father's-Name should contain only string of alphabets");
    document.getElementById("ffname").focus();
    return false;
    }

  if(mmName.length<2 || mmName.length>40){
    alert("Mother's-Name length should be more than 2 and less than 41 charaters");
    document.getElementById("mmname").focus();
    return false;
    }
    
  if(regName.test(mmName)){
    alert("Mother's-Name should contain only string of alphabets");
    document.getElementById("mmname").focus();
    return false;
    }

  if(email == "" || !regEmail.test(email)){
    alert("Enter proper Email");
    document.getElementById("email").focus();
    return false;
  }

  if(!(regpassword.test(password))){
    alert("Password should be at least 11 characters long consisting at least one uppercase letter one digit and one special character!");
    document.getElementById("password").focus();
    return false;
  }

  if(!(password==password1)){
    alert("Passwords should be same in both the columns")
    document.getElementById("password1").focus();
    return false;
  }

  if(phoneNumber=="" || !regPhone.test(phoneNumber)){
    alert("Enter valid phone number!");
    document.getElementById("phone").focus();
    return false;
  }

  if(country=="" || !regcountry.test(country)){
    alert("Enter valid country code for alternate phone number!");
    document.getElementById("code").focus();
    return false;
  }

  if(phoneNumber1=="" || !regPhone.test(phoneNumber1)){
    alert("Enter valid alternate phone number!");
    document.getElementById("phone1").focus();
    return false;
  }

  if(address == ""){
    alert("Enter your current address!");
    document.getElementById("address").focus();
    return false;
  }

  if(jee == "" || jee<1){
    alert("Enter JEE rank greater than zero");
    document.getElementById("jee").focus();
    return false;
  }

  if(cet == "" || cet<1){
    alert("Enter CET rank greater than zero");
    document.getElementById("cet").focus();
    return false;
  }

  if(rank == "" || !regrank.test(rank)){
    alert("Enter institute rank between the range 1-9999");
    document.getElementById("Rank").focus();
    return false;
  }

  if(prn == "" || !regprn.test(prn)){
    alert("Enter 8 digit PRN Number!");
    document.getElementById("prn").focus();
    return false;
  }

  if(course == ""){
    alert("Select your course!");
    document.getElementById("course").focus();
    return false;
  }

  if(stream == ""){
    alert("Select your stream!");
    document.getElementById("stream").focus();
    return false;
  }

  if (upfile.upfile.value === "") {
    alert("Please upload your Admission Confirmation form!");
    document.getElementById("upfile").focus();
    return false;
  }

  confirm("Do you want to Submit your information?");
  return true;
  }