const display=document.querySelector(".display")
const buttons=document.querySelectorAll("button")
const special=["%", "*" ,"-", "+", "/", "="]
let output= "";
const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== ""){
        output=eval(output.replace("%","/100"));
    }else if(btnvalue === "AC"){
        output="";
    }else if(btnvalue === "DE"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output === "" && special.includes(btnvalue) ) return;
        output+=btnvalue;
    }
    display.value= output;
};
buttons.forEach((button)=>{
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));

});