// Js object task start here;
// task-1 start here;
// Access the golden rod color value in output

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

// task-2 start here
// For this object below add a property named passenger capacity with value 5;

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"] = 5 ;

console.log(car);
// task-3 start here;
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);