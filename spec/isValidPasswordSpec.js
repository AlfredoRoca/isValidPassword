/* TODO list
isValid("") --> false
isValid(null) --> false
isValid() --> false
isValid("1Ag_") --> false 
isValid("123456Je") --> false 
isValid("123456y_") --> false 
isValid("_JYhgyQ") --> false 
isValid("_JYKR23Q") --> false 
isValid("123456yQ_") --> true
*/

describe("Entering a password", function(){
  it("should be false when empty string", function(){
    expect(isValid("")).toBeFalsy();
  });
  it("should be false when Null", function(){
    expect(isValid(null)).toBeFalsy();
  });
  it("should be false when nothing passed", function(){
    expect(isValid()).toBeFalsy();
  });
  it("should be false if password is too short", function(){
    expect(isValid("1Ag_")).toBeFalsy();
  });
});