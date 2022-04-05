const firstValue = prompt('Please enter your first value');

const operator = prompt('Please enter operator +-*/');

const secondValue = prompt('Please enter your second value');

if (!(operator === '+' || operator === '-' || operator === '/' || operator === '*')) {

   alert("There is no such operator");

} else if (Number(firstValue) && Number(secondValue)) {

   alert(`Your result is ${eval(firstValue + operator + secondValue)}`);

} else {
   alert("First value and/or second value is not a number!")
}
