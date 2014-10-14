function isValid(password){
  if (password === "") {
    return false;
  }
  else if (password === null) {
  	return false;
  }
  else {
  	return true;
  }

}