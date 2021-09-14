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