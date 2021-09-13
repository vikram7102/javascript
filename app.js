
// es6 function
let add=(x,y)=>x+y;
console.log(add(2,3));

let sub =(a,b)=>{
    return a-b;
}
console.log(sub(5,3));


var arr = [1,2,3,4];
console.log(arr[2]);

var [one, two, three, four, five] = arr; //ES6 Destructuring
console.log(three);
console.log(four);
console.log(five);


function getscores() {
    return [90,100];
}

let [x,y,z] = getscores();
console.log(x);
console.log(y);
console.log(z);


const obj = {
    fullname: "Nikhil Agarwal",
    email: "nikhilagarwaliitkgp@gmail.com",
    age: 20
}

console.log(obj.email)

let {dum, age, email, fullname} = obj;
console.log(fullname)
console.log(dum)


let person = {
    firstname: "Nikhil",
    lastname: "Agarwal",
    age1: 20,
    middlename: "DNA"
}
let {age1, firstname, lastname, middlename="" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

const counter={
    count:1,
    vikram: function(){
        return ++(this.count);
    },
    key:this,
    bhosale:() =>{
        return --(this.count)
    } 
}
console.log(counter)
console.log(counter.vikram)
console.log(counter.bhosale)
console.log(counter)

//

