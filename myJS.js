/*
* Excercise 1
*
*/
const theblock = document.getElementById("color-block");
const thecolor = document.getElementById("color-name");
/*
* Then write a function that changes the text and the color inside the div
*
*/
theblock.addEventListener("click", () => {
    const clname = thecolor.innerHTML;
    if (clname == "#F08080"){
        theblock.style.backgroundColor = "#fcba03";
        thecolor.innerHTML="#fcba03";
    }else{
        theblock.style.backgroundColor = "#F08080";
        thecolor.innerHTML="#F08080";
    }
})


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const thebutton = document.getElementById("convertbtn");
const finput = document.getElementById("f-input");
thebutton.addEventListener("click",convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp() {
    //Calculate the temperature here
    const Ftemp = finput.value;
    const Ctemp = Math.round((Ftemp - 32 )/9*5)
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML=Ctemp
}


