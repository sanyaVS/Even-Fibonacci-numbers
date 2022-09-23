'use strict';

let x1, x2, x3;
x1 = 1;
x2 = 0;
x3 = 0;
let sum = 0;
while (x3 <= 4000000) {

   x3 = x1 + x2;
   x1 = x2;
   x2 = x3;
   if (x3 % 2 == 0) {
      sum += x3;
   }

}
console.log(sum);



