
var name = "Saba";
var age = 20;
var city = "Lahore";
var isStudent = true;
var university = "Air University";

var biography = {
    name: name,
    age: age,
    isStudent: isStudent,
    address: {
        city: city,
        country: "Pakistan"
    },
    degreeProgram: {
        degree: "BSCS",
        semester: 5,
        university: university
    }
};

console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Student: " + biography.isStudent);
console.log("City: " + biography.address.city);
console.log("Country: " + biography.address.country);
console.log("Degree: " + biography.degreeProgram.degree);
console.log("Semester: " + biography.degreeProgram.semester);
console.log("University: " + biography.degreeProgram.university);
