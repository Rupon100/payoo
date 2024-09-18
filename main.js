



document.getElementById('btn').addEventListener('click', (e)=> {
    e.preventDefault();//for stop reload the page while using form

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === '88018' && pinNumber === '1234'){
        console.log("Log in!");
        window.location.href = './home.html';
    }else {
        alert("wrong!");
    }
});


