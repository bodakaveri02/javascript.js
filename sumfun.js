function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));
let arr = [1, 2, 3, 4, 5, 6];
let min = Math.min(...arr);
console.log( min);
let chars = ['d', 'a', 'z', 'b'];
chars.sort(); // sorts alphabetically
console.log( chars[0]);
const obj = {
    name: "kaveri",
    age: 20
};

const copy = { ...obj }; // Just THREE dots
console.log(copy);
function my(...args) {
    return args.reduce((sum, el) => sum + el);
}

let result = my(1, 3, 2, 4, 5, 6, 7);
console.log(result);  

let[num2,num1]=arr;
console.log(num1);
console.log(num2);
let[n1,n2,...n]=arr;
console.log(...n);
let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");
    let person = {
      user: username,
      pswd: password
    };
    let { user, pswd } = person;
console.log("Username:", user);
    console.log("Password:", password);

