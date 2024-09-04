// Js object task start here;
// task-1 start here;
// Access the golden rod color value in output

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]);

// task-2 start here
// For this object below add a property named passenger capacity with value 5;

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger capacity"] = 5 ;

// console.log(car);
// task-3 start here;
// Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// // student.id = 3333;
// student.name.toLowerCase();
// console.log(student);
// console.log(student.physics.marks);
// task-4 start here;
// Count the number of properties.

// let students = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(students).length);
// task-5 start here;
// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {

    if (myObject.hasOwnProperty(key)) {
        console.log(`key: ${key}: | type: ${typeof myObject[key]}`);
    }
}
