console.log('Wassap');
console.log('gucci gang');

let firstname = 'Sujan';
let age = 19;
let enroll = true;

if (enroll == true){
    enrollStatus = 'Enrolled'
} else{
    enrollStatus = 'Not Enrolled'
}


console.log("Hello", firstname)
console.log("You are", age, "years old")
console.log("You are currently", enrollStatus)

document.getElementById('p1').innerHTML = 'Hello ' + firstname;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'You are currently ' + enrollStatus;