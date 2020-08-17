function palindrome(str) {
  let newTempStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  return newTempStr.split("").reverse().join("") == newTempStr;
}

palindrome("eye");
