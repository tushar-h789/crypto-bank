//step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // /step-2: get the deposit amount from the deposit input field
    //for input field use. value to the value inside the input field
    const depositFild = document.getElementById('deposit-input');
    const depositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(depositAmountString)

    
    //sept-3: get the current deposit total 
    //for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalElement = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalElement)

    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount

    depositTotalElement.innerText = currentDepositTotal

    //step-5: 
    const balanceTotalElement= document.getElementById('balance-total')
    const previousBalanceTotalElement = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElement)

    //step-6: 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount

    balanceTotalElement.innerText = currentBalanceTotal


    //step-: 7
    depositFild.value= " "
})

