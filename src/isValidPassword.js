function isValid(password){
  if (password === "") {
    return false;
  }
  else if (password === null) {
  	return false;
  }
  else if (typeof(password) === "undefined") {
    return false;
  }
  else if (password.length < 6) {
    return false;
  }
  else if (password.indexOf("_") === -1) {
    return false;
  }
  else if (password.search(/[A-Z]/) === -1) {
    return false;
  }
  else {
  	return true;
  }

}