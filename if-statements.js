// If statements

var condition = 1 < 0;

if (condition) {
  console.log("Runs....");
} else {
  console.log("Else condition ran...")
}

var gender = "T";

if (gender == "M" || "MALE") {
  console.log("Male");
}
else if (gender == "F" || "FEMALE") {
  console.log("Female");
}
else if (gender == "T" || "THEY") {
  console.log("They")
}
else {
  console.log("Unknown");
}