function onLeftOperandChange(value) {
  console.log('onLeftOperandChange', value)
};

function onRightOperandChange(value) {
  console.log('onRightOperandChange', value)
};

function onOperatorChange(value) {
  console.log('onOperatorChange', value)
};
// let a = onLeftOperandChange();
// let b = onRightOperandChange();
// console.log(a);
// console.log(b);
// function onSubmit () {
//     switch (onOperatorChange()) {
//       case 'ADDITION' :
//         return Number(onLeftOperandChange(value)) + Number(onRightOperandChange(value));
//       case 'SUBTRACTION' :
//         return Number(onLeftOperandChange(value)) - Number(onRightOperandChange(value));
//       case 'MULTIPLICATION' :
//         return Number(onLeftOperandChange(value)) * Number(onRightOperandChange(value));
//       case 'EXPONENTIATION' :
//         return Number(onLeftOperandChange(value)) ** Number(onRightOperandChange(value));
//       case 'DIVISION' :
//         return Number(onLeftOperandChange(value)) / Number(onRightOperandChange(value));
//       case 'MODULUS' :
//         return Number(onLeftOperandChange(value)) % Number(onRightOperandChange(value));
//       case 'ROOT' :
//         return Number(onLeftOperandChange(value)) ** 1/Number(onRightOperandChange(value));
//     }
//   }
//   console.log(Number(onLeftOperandChange(value)))
//   console.log(onSubmit())
// }

function onClear () {
  console.log('onClear')
}
// setExpression('(2 + 3) * 4')