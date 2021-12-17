let leftOperand;
let rightOperand;
let operatorName;
let operatorSymbol;
let resultString;
let someString;

function getResult(leftOperand, operatorName, rightOperand) {
  switch (operatorName) {
    case 'ADDITION':
      return (leftOperand + rightOperand);
    case 'SUBTRACTION':
      return (leftOperand - rightOperand);
    case 'MULTIPLICATION':
      return (leftOperand * rightOperand);
    case 'EXPONENTIATION':
      return (leftOperand ** rightOperand);
    case 'DIVISION':
      return (leftOperand / rightOperand);
    case 'MODULUS':
      return (leftOperand % rightOperand);
    case 'ROOT':
      return (leftOperand ** (1/rightOperand));
  };
};

function onLeftOperandChange(value) {
  leftOperand = +value;
  // console.log(leftOperand);
}

function onRightOperandChange(value) {
  rightOperand = +value;
  // console.log(rightOperand);
}

function onOperatorChange(value) {
  operatorName = value;
  // console.log(operatorName);
switch (operatorName) {
  case 'ADDITION' :
    operatorSymbol = ' + ';
    break;
  case 'SUBTRACTION' :
    operatorSymbol = ' - ';
    break;
  case 'MULTIPLICATION' :
    operatorSymbol = ' * ';
    break;
  case 'EXPONENTIATION' :
    operatorSymbol = ' xª ';
    break;
  case 'DIVISION' :
    operatorSymbol = ' / ';
    break;
  case 'MODULUS' :
    operatorSymbol = ' % ';
    break;
  case 'ROOT' :
    operatorSymbol = ' √ ';
    break;
};
// console.log(operatorSymbol);
};

function onSubmit () {
  if (leftOperand && operatorSymbol && rightOperand) {
    if (!someString) {
      someString = leftOperand + operatorSymbol + rightOperand;
    } else {
      someString = '( '+ `${someString}` + ')' + `${operatorSymbol}` + `${rightOperand}`;
    };
    resultString = someString;
    setExpression(resultString);
    setResult(getResult(leftOperand, operatorName, rightOperand));
  };

console.log('onSubmit');
};

function onClear () {
  someString = undefined;
  setResult(undefined);
  setExpression('');
  console.log('onClear')
};