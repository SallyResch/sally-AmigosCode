//Objects in variables, 
var person = {
  firstName: "Jamila",
  age: 35,
  isFemale: true,
  balance: 100.32,
  dob: new Date(1987, 1, 11).toJSON(),
  address: {
    city: "London",
    postCode: "SW9"
  }
};

//Hur man länkar till object i object
console.log(person.address.city);

//values får ut värdet på alla variabler
console.log(Object.values(person));

//keys får ut keywords på alla values
console.log(Object.keys(person));

//Gör allt till en enda lång string. alltså man byter datatype på dem.
console.log(JSON.stringify(person));