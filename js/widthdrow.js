  // step-1:
  document.getElementById('widthdrow-btn').addEventListener('click', function(){
    const widthdrowField = document.getElementById('widthdrow-input')
    const widthdrowFieldElementString = widthdrowField.value
    const newWidthdrowAmount = parseFloat(widthdrowFieldElementString)

    const widthdrowTotalElement = document.getElementById('widthdrow-total');
    const previousWidthdrowElement = widthdrowTotalElement.innerText
    const previousWidthdrowTotal = parseFloat(previousWidthdrowElement)

    const currentWidthdrowTotal = newWidthdrowAmount + previousWidthdrowTotal;
    widthdrowTotalElement.innerText = currentWidthdrowTotal



    const balanceTotalElement= document.getElementById('balance-total')
    const previousBalanceTotalElement = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElement)

    const currentBalanceTotal = previousBalanceTotal - newWidthdrowAmount
    balanceTotalElement.innerText = currentBalanceTotal


    widthdrowField.value = ""
})