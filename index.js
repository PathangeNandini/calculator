const display=document.getElementById("display");

function appendtodisplay(input){
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function cleardisplay(){
    display.value = "";    
}

function calculate(){
    try{
        if (display.value === "") return;
        if (/[^0-9+\-*/.]/.test(display.value)) {
            throw "Invalid";
        }
        display.value = Function(`return ${display.value}`)();

    }
    catch(error){
        display.value="Error";    
    }
}