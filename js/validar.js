const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const email = document.getElementById("correo");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warning");

const changeText = document.getElementById('changeText') ;
const codigo = document.getElementById('codigo') ;
const userInput = document.getElementById('userInput') ;
const captcha = document.getElementById('captcha');

changeText.addEventListener('click' , () => {
    codigo.textContent = createCaptcha() ;
}) ;
window.addEventListener('load' , () => {
    codigo.textContent = createCaptcha() ;
}) ;
function createCaptcha()  {
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
    let a = letters[Math.floor(Math.random() * letters.length)] ;
    let b = letters[Math.floor(Math.random() * letters.length)] ;
    let c = letters[Math.floor(Math.random() * letters.length)] ;
    let d = letters[Math.floor(Math.random() * letters.length)] ;
    let e = letters[Math.floor(Math.random() * letters.length)] ;
    let f = letters[Math.floor(Math.random() * letters.length)] ;
    let g = letters[Math.floor(Math.random() * letters.length)] ;
    let codigo = a + b + c + d + e + f + g ;
    return codigo ;
} 


form.addEventListener("submit", e=>{
    e.preventDefault()
   
    let warning = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 3) {
        warning += 'el nombre no es valido <br>'
        entrar = true
        console.log("checkpoint 1")
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)) {
        warning += 'el email no es valido <br>'
        entrar = true
    }
    if(codigo.textContent != captcha.value){
        warning += 'el captcha no es valido <br>'
        entrar = true
    }
    if(password.value.length < 4){
        warning += 'la contraseña no es valido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado"
    }
})