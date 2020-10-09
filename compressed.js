function generatePassword(a, b, c, d, e) {
  if (8 > a || 128 < a) alert("password must be between 8 and 128 char long");
  else {
    if (b || c || d || e) {
      var f = "",
        g = "";
      b && (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
        c && (f += "abcdefghijklmnopqrstuvwxyz"),
        d && (f += "1234567890"),
        e && (f += '!@#$%^&*()_+~`|}{[]\\:;?><,./-="');
      for (var h = 0; h < a; h++)
        g += f.charAt(Math.floor(Math.random() * f.length));
      return g;
    }
    alert("please select at least one charactertype");
  }
}
function writePassword(a, b, c, d, e) {
  var f = generatePassword(a, b, c, d, e);
  document.getElementById("password").innerHTML = f;
}
document.getElementById("generate").addEventListener("click", function () {
  var a = prompt("enter the password length"),
    b = confirm("Do you want uppercase letters?"),
    c = confirm("lowercase letter?"),
    d = confirm("Do you want numbers?"),
    e = confirm("Do you want special characters?");
  writePassword(a, b, c, d, e);
});
