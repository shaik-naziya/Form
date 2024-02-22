function Validation(value) {
  let error = {};

  if (!value.fullname){
    error.fullname = "Name Is Required";
  }
  if(!value.email){
    error.email = "Email Is Required";
  } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value.email)){
    error.email = "Email Is Invalid";
  }
  if(!value.password){
    error.password = "Password is required";
  } else if (value.password.length < 5){
    error.password = "Password Is Too Short (Minimum 5 characters)";
  }

  return error;
}

export default Validation;

