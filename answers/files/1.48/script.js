let leftOperand;
let rightOperand;
let clear;
let result;
function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value);
  leftOperand = value;
};
console.log(leftOperand);
function onRightOperandChange(value) {
  console.log('onRightOperandChange', value);
  rightOperand = value;
};

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
};

function onSubmit () {
//     switch (onOperatorChange()) {
//       case 'ADDITION' :
//         return result = (Number(onLeftOperandChange(value)) + Number(onRightOperandChange(value)));
//       case 'SUBTRACTION' :
//         return result = Number(onLeftOperandChange(value)) - Number(onRightOperandChange(value));
//       case 'MULTIPLICATION' :
//         return result = Number(onLeftOperandChange(value)) * Number(onRightOperandChange(value));
//       case 'EXPONENTIATION' :
//         return result = Number(onLeftOperandChange(value)) ** Number(onRightOperandChange(value));
//       case 'DIVISION' :
//         return result = Number(onLeftOperandChange(value)) / Number(onRightOperandChange(value));
//       case 'MODULUS' :
//         return result = Number(onLeftOperandChange(value)) % Number(onRightOperandChange(value));
//       case 'ROOT' :
//         return result = Number(onLeftOperandChange(value)) ** 1/Number(onRightOperandChange(value));
//     }
//   }
//   console.log(Number(onLeftOperandChange(value)))
//   console.log(onSubmit())
 }

function onClear () {
  console.log('onClear')
  clear = onClear();
}

// setExpression('(2 + 3) * 4')
// setResult(50);