 
//toggle
const outToggle = document.getElementById('out-toggle');
outToggle.addEventListener('click', ()=> {
    // const addBox = document.getElementById('add-box');
    // const outBox = document.getElementById('out-box');
    // addBox.style.display = 'none';
    // outBox.style.display = 'block';
    document.getElementById('add-box').classList.add('hidden');
    document.getElementById('out-box').classList.remove('hidden');
     //can do with outBox.classList.remove('hidden');
});
const addToggle = document.getElementById('add-toggle');
addToggle.addEventListener('click', ()=> {
    // const outBox = document.getElementById('out-box');
    // const addBox = document.getElementById('add-box');
    // outBox.style.display = 'none';
    // addBox.style.display = 'block';
    document.getElementById('out-box').classList.add('hidden');
    document.getElementById('add-box').classList.remove('hidden');
    //can do with addBox.classList.remove('hidden');
});



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


//cash-out money
const outBtn = document.getElementById('cash-out-btn');
outBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    
    const outInput = document.getElementById('money-out').value;
    const outPin = document.getElementById('out-pin').value;
    
    if(outInput > 0 && outInput < 10000){
        if(outPin === '1234'){
            const currentBalance = document.getElementById('current-balance').textContent;
            const finalBalance = parseFloat(currentBalance) - parseFloat(outInput);
            document.getElementById('current-balance').innerText = finalBalance;

            document.getElementById('money-out').value = '';
            document.getElementById('out-pin').value = '';
        }else{
            alert('Invalid PIN!');
        }
    }else {
        alert('Enter a valid amount!');
    }
});

