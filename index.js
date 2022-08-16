

let submit  =document.getElementById('submit')
submit.addEventListener('click',()=>{
    let email  =document.getElementById('email')
    let password  =document.getElementById('password')
    let emailVal = email.value
    let passlVal = password.value
    if(emailVal && passlVal){
        window.location.href= 'bank.html'
    }else{
        alert('please Write your identity!')
    }
})
