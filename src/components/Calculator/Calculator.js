import { useState } from 'react';
import { parse, eval as evaluate } from 'expression-eval';

import "./Calculator.css";

const Calculator = () => {
    let [result, setResult] = useState(0);
    let [history, setHistory] = useState("");
    let [clearMode, setClearMode] = useState(false);
    let [finalResult, setFinalResult] = useState(0);

    // Function to calculate the result of the entered expression
    const calculate = () => {
        let expression = history.replaceAll("x", "*");
        expression = expression.replaceAll(" ", "");

        if("+/-%*".includes(expression[expression.length - 1]))
            expression += result;

        console.log(expression);
        return evaluate(parse(expression));
    }

    // Function triggered each time a digit is pressed
    // Append the digit to the number displayed
    const onDigitClick = (num) => {
        if (result !== 0 && result.length === 9)
            return;
        if (result === 0 || clearMode)
            result = num;
        else
            result += num;

        setResult(result);
        if (clearMode)
            setClearMode(false);
    }

    // Function triggered each time an operator is pressed
    // Calculate the intermediate result | Update history
    const onOperatorClick = (op) => {
        console.log(finalResult);
        if (result === 0 || clearMode)
            return;

        history += `${result} ${op} `;
        setHistory(history);
        setClearMode(true);
        
    }
    
    // Function triggered when equal to button is pressed
    // Final result evaluated
    const onEquals = () => {
        result = calculate();
        setResult(result);
        setHistory("");
        setClearMode(true);
    }

    // Function triggered when clear button is pressed
    // Reset to defaults
    const onClear = () => {
        setResult(0);
        setHistory("");
        setFinalResult(0);
        setClearMode(false);
    }

    return (
        <div className="calculator-wrapper">
            <div className="calculator-frame">
                <div className="calculator-display">
                    <div className="calculator-history">{history}</div>
                    <div className="calculator-result">{result}</div>
                </div>
                <div className="calculator-buttons">
                    <div className="calculator-btn operator" onClick={() => onClear()}>C</div>
                    <div className="calculator-btn operator">+/-</div>
                    <div className="calculator-btn operator" onClick={() => onOperatorClick("%")}>%</div>
                    <div className="calculator-btn operator" onClick={() => onOperatorClick("/")}>/</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("7")}>7</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("8")}>8</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("9")}>9</div>
                    <div className="calculator-btn operator" onClick={() => onOperatorClick("x")}>x</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("4")}>4</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("5")}>5</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("6")}>6</div>
                    <div className="calculator-btn operator" onClick={() => onOperatorClick("-")}>-</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("1")}>1</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("2")}>2</div>
                    <div className="calculator-btn" onClick={() => onDigitClick("3")}>3</div>
                    <div className="calculator-btn operator" onClick={() => onOperatorClick("+")}>+</div>
                    <div className="calculator-btn zero" onClick={() => onDigitClick("0")}>0</div>
                    <div className="calculator-btn">.</div>
                    <div className="calculator-btn equals" onClick={() => onEquals()}>=</div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;