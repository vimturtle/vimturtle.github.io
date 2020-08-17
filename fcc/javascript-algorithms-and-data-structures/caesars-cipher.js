function rot13(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let temp = str.charCodeAt(i)
    if (temp < 65 || temp > 90) {
      arr.push(str[i])
    }
    else if (str.charCodeAt(i) < 78) {
      arr.push(String.fromCharCode(temp + 13))
    }
    else {
      arr.push(String.fromCharCode(temp - 13))
    }
  }

  return arr.join("");
}

// This solution is pretty good!!!
// function rot13(str) {
//   return str.replace(/[A-Z]/g, L =>
//     String.fromCharCode((L.charCodeAt(0) % 26) + 65)
//   );
// }

rot13("SERR PBQR PNZC");
