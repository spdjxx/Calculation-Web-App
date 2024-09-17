const addClicked = (event) => {
    console.log("Add clicked");

    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);

    document.getElementById("result").innerHTML = num1 + num2;

    //getElementByID from EACH input
    //add the two numbers together and store in result
    //make the result show up in the HTML
};

const minusClicked = (event) => {
    console.log("Minus clicked");

    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);

    document.getElementById("result").innerHTML = num1 - num2;
};

const divideClicked = (event) => {
    console.log("Divide clicked");

    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);

    document.getElementById("result").innerHTML = num1 / num2;
};

const multiplyClicked = (event) => {
    console.log("Multiply clicked");

    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);

    document.getElementById("result").innerHTML = num1 * num2;
};
