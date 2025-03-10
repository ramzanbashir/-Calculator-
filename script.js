

        // let displayOutput = document.getElementById("displayoutput");
        // let displayInput = document.getElementById("displayinput");

        // let currentInput = "";
        // let previousInput = "";
        // let operators = ["+", "-", "*", "/"];

        // function userInput(value) {
        //     let lastChar = currentInput.slice(-1);
        //     if (operators.includes(value) && operators.includes(lastChar)) {
        //         currentInput = currentInput.slice(0, -1) + value;
        //     } else {
        //         currentInput += value;
        //     }
        //     updateDisplay();
        // }

        // function clearEntry() { currentInput = ""; updateDisplay(); }
        // function clearAll() { currentInput = ""; previousInput = ""; displayOutput.innerText = ""; updateDisplay(); }
        // function deleteLast() { currentInput = currentInput.slice(0, -1); updateDisplay(); }
        // function toggleSign() { currentInput = currentInput.startsWith("-") ? currentInput.substring(1) : "-" + currentInput; updateDisplay(); }
        // function calculateResult() { previousInput = currentInput; currentInput = eval(currentInput).toString(); displayOutput.innerText = previousInput + " ="; updateDisplay(); }
        // function updateDisplay() { displayInput.innerText = currentInput || "0"; }



    let displayOutput = document.getElementById("displayoutput");
    let displayInput = document.getElementById("displayinput");

    let currentInput = "";
    let previousInput = "";
    let operators = ["+", "-", "*", "/"];

    function userInput(value) {
        let lastChar = currentInput.slice(-1);
        if (operators.includes(value) && operators.includes(lastChar)) {
            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }
        updateDisplay();
    }

    function clearEntry() { 
        currentInput = ""; updateDisplay();
     }

    function clearAll() { 
        currentInput = ""; previousInput = ""; displayOutput.innerText = ""; updateDisplay();
     }

    function deleteLast() { 
        currentInput = currentInput.slice(0, -1); updateDisplay();
     }

    function doubleSign() { 
        currentInput = currentInput.startsWith("-") ? currentInput.substring(1) : "-" + currentInput; updateDisplay();
     }

    function calculateResult() { 
        previousInput = currentInput; currentInput = eval(currentInput).toString(); displayOutput.innerText = previousInput + " ="; updateDisplay();
     }

    function updateDisplay() { 
        displayInput.innerText = currentInput || "0";
     }
