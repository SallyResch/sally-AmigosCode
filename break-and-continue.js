//Break and Continue

//Break
for (var i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}


//Continue
for (var i = 0; i <= 10; i++) {

  if (i < 5) {
    continue;
  }
  console.log(i);
}