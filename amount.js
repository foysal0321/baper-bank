
const diposit = document.getElementById('diposit')
diposit.addEventListener('click',()=>{
    //diposit input
    const dipositInput = document.getElementById('dipositInput')
    const dipoValue = dipositInput.value
    const dipoNumber = parseFloat(dipoValue)

    //diposit total text
    const dipositTotal = document.getElementById('dipositTotal')
    const dipoTotalVal = dipositTotal.innerText
    const dipoTotalNum = parseFloat(dipoTotalVal)

    if(isNaN(dipoNumber) || dipoNumber <= 0){
        alert('Please enter a positive number!')
        dipositInput.value = ''
        return
    }
    //total diposit value
    const currentdipo = dipoNumber + dipoTotalNum
    dipositTotal.innerText=currentdipo

    dipositInput.value = ''

    //total balance 
    const balanceTotal = document.getElementById('balanceTotal')
    const balanceVal = balanceTotal.innerText
    const balanceNum = parseFloat(balanceVal)

    const currentBalance = dipoNumber + balanceNum
    balanceTotal.innerText= currentBalance
   
})

//witdraw

  const withdraw = document.getElementById('withdraw')
  withdraw.addEventListener('click',()=>{
  //widthdraw input value
  const withdrawInput = document.getElementById('withdrawInput')
  const withdrawVal = withdrawInput.value
  const withdrawNum  = parseFloat(withdrawVal)

  //widthdraw total text
  const withdrawTotal = document.getElementById('withdrawTotal')
  const withdrawTotalVal = withdrawTotal.innerText
  const withdrawtotalNum = parseFloat(withdrawTotalVal)

  //withdraw check nan
  if(isNaN(withdrawNum) || withdrawNum <= 0 ) {
    alert('Please enter a positive number')
    withdrawInput.value = ''
    return
  }
  //total balnce
  const balanceTotal = document.getElementById('balanceTotal')
  const balanceVal = balanceTotal.innerText
  const balanceNum = parseFloat(balanceVal)

  //check widthraw is high
  if(withdrawNum > balanceNum){
    alert('Sorry! balance no money')
    withdrawInput.value = ''
    return
  }
  //total-widthraw-balance
  const currentwithdraw = withdrawNum + withdrawtotalNum
  withdrawTotal.innerText = currentwithdraw

  //current-total-balance
  const currentbalance =  balanceNum - withdrawNum
  balanceTotal.innerText = currentbalance

  withdrawInput.value = ''
    })  
//end








