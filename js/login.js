document.getElementById('input-fild').addEventListener('click', function(){
    const userEmail= document.getElementById('user-email')
    const email = userEmail.value
    
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value

    if(email === 'tushar@gmail.com' && password==='tushar'){
        window.location.href = 'bank.html'
    }else{
        alert("pass vul")
    }
})