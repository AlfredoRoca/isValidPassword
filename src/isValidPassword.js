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
  else {
  	return true;
  }

}