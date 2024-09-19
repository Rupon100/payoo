 
//toggle
// function toggleAction(id1, id2){
//     const addStyle = document.getElementById(id1);
//     const removeStyle = document.getElementById(id2);
//     addStyle.classList.add('hidden');
//     removeStyle.classList.remove('hidden');
// }

// document.getElementById('out-toggle').addEventListener('click', ()=> {
//     toggleAction('add-box', 'out-box');
// })
// document.getElementById('add-toggle').addEventListener('click', ()=> {
//     toggleAction('out-box', 'add-box');
// })

function showSection(id){
    document.getElementById('add-box').classList.add('hidden');
    document.getElementById('out-box').classList.add('hidden');
    document.getElementById('transition-box').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
document.getElementById('add-toggle').addEventListener('click', ()=> {
    showSection('add-box');
})
document.getElementById('out-toggle').addEventListener('click', ()=> {
    showSection('out-box');
})
document.getElementById('transition').addEventListener('click', ()=> {
    showSection('transition-box');
})

// const outToggle = document.getElementById('out-toggle');
// outToggle.addEventListener('click', ()=> {
//     document.getElementById('add-box').classList.add('hidden');
//     document.getElementById('out-box').classList.remove('hidden');
// });
// const addToggle = document.getElementById('add-toggle');
// addToggle.addEventListener('click', ()=> {
//     document.getElementById('out-box').classList.add('hidden');
//     document.getElementById('add-box').classList.remove('hidden');
// });







//for current banalce
function getTxtValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

//for get input amount and pin
function getInput(id){
    const addMoneyInput = document.getElementById(id).value;
    return parseFloat(addMoneyInput);
}

//for blank input box
function blankBox(id){
    const blankId = document.getElementById(id);
    blankId.value = '';
}

//event on button click
document.getElementById('add-btn').addEventListener('click', (e)=> {
    e.preventDefault();

    const addMoney = getInput('money-input');
    const pinNumber = getInput('input-pin');

    if(addMoney > 0){
        if(pinNumber === 1234){
            const balance = getTxtValue('current-balance');
            const newBalance = balance + addMoney;
            document.getElementById('current-balance').innerText = newBalance;
    
            blankBox('money-input');
            blankBox('input-pin');

            //add to transition history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            document.getElementById('tran-container').appendChild(p);
        }else {
            alert('Faild to add the money!');
        }
    }else {
        alert('Enter valid amount!');
    }
});

//add money
// const addBtn = document.getElementById('add-btn');
// addBtn.addEventListener('click', (e)=> {
//     e.preventDefault();
     
//     const addMoneyInput = document.getElementById('money-input').value;
//     const pinNumber = document.getElementById('input-pin').value;

//     if(addMoneyInput > 0 && addMoneyInput < 10000){
//         if(pinNumber === '1234'){
//             const currentBalance = document.getElementById('current-balance').textContent;
//             const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
//             document.getElementById('current-balance').innerText = newBalance;

//             document.getElementById('money-input').value = '';
//             document.getElementById('input-pin').value = '';
//         }else{
//             alert("Invalid PIN!");
//         }
//     }
//     else {
//         alert("Enter a valid amount!");
//     }

// });

document.getElementById('cash-out-btn').addEventListener('click', (e)=> {
    e.preventDefault();

    const outMoney = getInput('money-out');
    const outPin = getInput('out-pin');

    const balance = getTxtValue('current-balance');

    if(outMoney <= balance){
        if(outPin === 1234){
            const newBalance = balance - outMoney;
            document.getElementById('current-balance').innerText = newBalance;

            blankBox('money-out');
            blankBox('out-pin');

            //add to transition history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-500');
            div.innerHTML = `
               <p>Cash Out: ${outMoney} TK. New Banalce: ${newBalance}</p>
            `;
            document.getElementById('tran-container').appendChild(div);
        }else{
            alert('Enter a valid pin!');
        }
    }else{
        alert('Enter valid ammount!');
    }
});


//cash-out money
// const outBtn = document.getElementById('cash-out-btn');
// outBtn.addEventListener('click', (e)=> {
//     e.preventDefault();
    
//     const outInput = document.getElementById('money-out').value;
//     const outPin = document.getElementById('out-pin').value;

//     const currenBalance = document.getElementById('current-balance').textContent;
//     const maxBalance = parseFloat(currenBalance);

//     if(outInput <= maxBalance && outInput < 10000){
//         if(outPin === '1234'){
//             const currentBalance = document.getElementById('current-balance').textContent;
//             const finalBalance = parseFloat(currentBalance) - parseFloat(outInput);
//             document.getElementById('current-balance').innerText = finalBalance;

//             document.getElementById('money-out').value = '';
//             document.getElementById('out-pin').value = '';
//         }else{
//             alert('Invalid Amount!');
//         }
//     }else {
//         alert('Enter a valid amount!');
//     }
// });


//transition-history


