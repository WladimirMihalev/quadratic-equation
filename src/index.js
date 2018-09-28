module.exports = function solveEquation(equation) 
{

 var arr = equation.replace(/\s/g, '').match(/(\+|\-|\d)\d{1,}/g);

 var a = arr[0];
 var b = arr[1];
 var c = arr[2];

 var ind = Math.pow(b, 2) - 4 * a * c;
 var result1 = Math.round((-b + Math.sqrt(ind)) / (2 * a));
 var result2 = Math.round((-b - Math.sqrt(ind)) / (2 * a));

return [result1,result2].sort((a, b) => a - b);
}
/*Quadratic equation

Recall school math!
Task

Your task is to implement solveEquation function, wihch solves Quadratic equation. Each equality has exact 2 integer solutions. Return those numbers as ordered array.

Example:

  const solutions = solveEquation('2 * x^2 - 10 * x + 12');
  console.log(solutions); // [2, 3]

Write your code in `src/index.js. Be sure, that all tests are positive. That means you cannot catch any error in tests.
Prepare and test

    Install Node.js
    Clone this repository: git clone https://github.com/yankouskia/quadratic-equation.git
    Go to folder quadratic-equation
    Run npm install in command line
    Run npm test in command line
    You will see the number of passing and failing tests
*/ 