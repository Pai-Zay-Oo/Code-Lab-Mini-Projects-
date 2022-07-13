
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let finalResult = "";
let NumOneError = document.getElementById("numOneError");
let NumTwoError = document.getElementById("numTwoError");
let numOneStatus, numTwoStatus = false;


NumOneError.style.display = "none";
NumTwoError.style.display = "none";


btn.addEventListener("click",function(){
    let firstNum = document.getElementById("firstNum");
    let secondNum = document.getElementById("secondNum");
    let operator = document.getElementById("operator");
    if (firstNum.value == ''){
        NumOneError.style.display = 'block';
        numOneStatus = true;
    }else{
        NumOneError.style.display = 'none'; 
        numOneStatus = false;
    };
    if (secondNum.value == ''){
        NumTwoError.style.display = 'block';
        numTwoStatus = true;
    }else{
        NumTwoError.style.display = 'none'; 
        numTwoStatus = false;
    };

    if(numOneStatus == false && numTwoStatus == false){
        firstNum = parseInt(firstNum.value);
        secondNum = parseInt(secondNum.value);
    
        switch(operator.value){
            case 'add':
                finalResult = firstNum + secondNum;
                break;
             case 'minus':
                finalResult = firstNum - secondNum;
                break;
            case 'multiply':
                finalResult = firstNum * secondNum;
                break;
            case 'division':
                finalResult = firstNum / secondNum;
                 break;
        }
    }
    result.innerHTML = finalResult;
})