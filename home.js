 
//add money
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e)=> {
    e.preventDefault();
     
    const addMoneyInput = document.getElementById('money-input').value;
    const pinNumber = document.getElementById('input-pin').value;

    if(addMoneyInput > 0 && addMoneyInput < 10000){
        if(pinNumber === '1234'){
            const currentBalance = document.getElementById('current-balance').textContent;
            const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
            document.getElementById('current-balance').innerText = newBalance;

            document.getElementById('money-input').value = '';
            document.getElementById('input-pin').value = '';
        }else{
            alert("Invalid PIN!");
        }
    }
    else {
        alert("Enter a valid amount!");
    }

});

