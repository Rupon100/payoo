 
//add money
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log("successfull");

    // const mainBalance = document.getElementById('main-balance');
    // console.log(mainBalance.value);
    const addMoneyInput = document.getElementById('money-input').value;
    console.log(addMoneyInput);

    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber);

});

