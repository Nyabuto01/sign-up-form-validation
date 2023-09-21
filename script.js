const name = document.querySelector("#name")
const password = document.querySelector("#password")
const cPassword = document.querySelector("#cpassword")
const span1 = document.querySelector("#spn1")
const span2 = document.querySelector("#spn2")
const span3 = document.querySelector("#spn3")
const button = document.querySelector(".btn")

let local = localStorage;

let userData = {
    name: name.value,
    password: password.value
}

button.addEventListener('click',function(e){
    e.preventDefault();
    if(name.value ===''){
        span1.innerText="name can not be empty"
        span1.style.color="red"
        name.style.border="1px solid red"
    }

    if(password.value ===''){
        span2.innerText="password cannot be empty"
        password.style.border="1px solid red"
        span2.style.color="red"
    }
    else if(password.value.length < 8){
        span2.innerText="must be atleast 8 characters"
        span2.style.color="red"
    }
     if(password.value === cPassword.value){
           span3.innerText=''

    }
    else{
        span3.innerText='password does not match'
        cPassword.style.border="1px solid red"
        span3.style.color="red"
    }

    local.setItem('user-info',JSON.stringify(userData));
})
