let res=document.getElementById("result")
let btns=document.querySelectorAll("button")
let screenvalue="";
for (item of btns){
    item.addEventListener("click",(e)=>{
       buttontext=e.target.innerText
        console.log("button is clicked ",buttontext)
        if (buttontext=="C") {
            screenvalue=""
            res.value=screenvalue
        }
        else if(buttontext=="="){
            res.value=eval(screenvalue)
        }
        else{
            screenvalue+=buttontext
            res.value=screenvalue
        }
    })
}


// let result = document.getElementById('result');
// let buttons = document.querySelectorAll('button');
// let screenValue = '';

// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is', buttonText)
//         if (buttonText == 'C') {
//             screenValue = "";
//             result.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             result.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             result.value = screenValue;
//         }
//     })

// }