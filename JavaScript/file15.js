const student = {
    "Name" : "Harsh",
    "Age" : "20"
};
console.log(JSON.stringify(student));

const student1=`{"Name":"Harsh","Age":"20"}`;
console.log(JSON.parse(student1))