let elem=document.getElementById('click');
console.log(elem)

let elemclass =document.getElementsByClassName('container')
console.log(elemclass)
// elemclass[0].style.background='yellow';
//console.log()
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
elemclass[0].classList.remove("text-success")
// elemclass[0].innerHTML
// elemclass[0].innerText
console.log(elem.innerHTML)
console.log(elem.innerText)
console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)

let tn=document.getElementsByTagName('button')
console.log(tn)

//selecting using query

sel=document.querySelector('.container')
console.log(sel)
sel=document.querySelectorAll('.container')
console.log(sel)

//events in js

// function clicked(){
//     console.log('the button was clicked')
// }
// window.onload=function(){
//     console.log('the document was loaded')
// }
// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
//     console.log('click on container')
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log('mouse  on container')
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log('mouse out  of container')
// })

// settime and setinterval
// logkaro=()=> {
//     console.log('im your log')
// }
// setTimeout(logkaro,5000); //after 5 sec im log will get 
// clr=setInterval(logkaro,2000); 
// use clearInterval and clearTimeout to cancal the setTimeout or setTimeout
// clearInterval(clr);


// js local storage


// localStorage.setItem('name','vikram');
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('Name') // removes specific item from the local storage
// localStorage.clear()// clears all the items of the local storage

//json javascript object notation

// obj={Name:'vikram',length:1}
// jso=JSON.stringify(obj);  // converts object into string
// console.log(typeof(jso)) // string 
// console.log(jso)
// parsed=JSON.parse(`{"Name":"vikram","length":1}`) // converts strings into object
// console.log(parsed)


// backtick
a=34
console.log(`this is the ${a}`) // prints a value in console.log