const form =document.querySelector("form");
const name=form.querySelector("div .name");
const email =form.querySelector("div .email");
const password=form.querySelector("div .password")

form.addEventListener("submit", function (e){
    e.preventDefault();
    const info= {
      name : name.value,
      email : email.value,
      password :  password.value
 }
console.log(info)
  name.value = '',
  email.value = '',
  password.value = ''
})