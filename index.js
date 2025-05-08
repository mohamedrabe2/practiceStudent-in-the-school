var school = ["Yarob", "Ali", "Mohamed", "Reda", "Shady", "Salah"];
for (var memberIndex = 0; memberIndex <= school.length - 1; memberIndex++) {
  document.getElementById("school").innerHTML += school[memberIndex] + "--";
}
document.getElementById("search").addEventListener("click", function () {
  var name = document.getElementById("student-input").value.toLowerCase();
  var isFound = false;
  for (var student of school) {
    var lowerStudent = student.toLowerCase();
    if (name === lowerStudent) {
      isFound = true;
    }
  }
  if (isFound) {
    document.getElementById(
      "student-name"
    ).innerHTML = `${name} is in the school`;
  } else {
    document.getElementById(
      "student-name"
    ).innerHTML = `${name} is Not in the school`;
  }
});
