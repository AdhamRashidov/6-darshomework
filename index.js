// //  1 - loyiha
// let pizza = [
//   {
//     id: 1,
//     type: "Pishloqli",
//     size: "large",
//   },
//   {
//     id: 2,
//     type: "Qazili",
//     size: "medium",
//   },
//   {
//     id: 3,
//     type: "Tovuqli",
//     size: "medium",
//   },
// ];

// function Order(item, callback) {
//   console.log(`${item.id} - zakaz tayyorlanmoqda`);
//   setTimeout(() => {
//     callback(item);
//   }, item.id * 1000);
// }

// function Done(checked) {
//   console.log(
//     `${checked.id} - zakaz tayyor bo'ldi\nSize: ${checked.size}, Type: ${checked.type}`
//   );
// }

// pizza.forEach(function (val) {
//   Order(val, Done);
// });





// // //  2- loyiha

// let products = [
//     {
//         id: 1,
//         productName: "MacBook Pro 16-inch",
//         basePrice: 30000000,
//         payInMonths: 6,
//         monthlyPayment: 0,
//     },
//     {
//         id: 2,
//         productName: "MacBook Air",
//         basePrice: 20000000,
//         payInMonths: 12,
//         monthlyPayment: 0,
//     },
//     {
//         id: 3,
//         productName: "iPhone",
//         basePrice: 15000000,
//         payInMonths: 8,
//         monthlyPayment: 0,
//     },
//     {
//         id: 4,
//         productName: "Samsung Galaxy",
//         basePrice: 10000000,
//         payInMonths: 3,
//         monthlyPayment: 0,
//     },
//     {
//         id: 5,
//         productName: "Dell XPS",
//         basePrice: 18000000,
//         payInMonths: 15,
//         monthlyPayment: 0,
//     },
//     {
//         id: 6,
//         productName: "Samsung S25 Ultra",
//         basePrice: 16000000,
//         payInMonths: 9,
//         monthlyPayment: 0,
//     },
// ];

// function calculateFinalPrice(basePrice, payInMonths) {
//     return basePrice;  
// }

// function calculateInstallments(finalPrice, payInMonths) {
//     let harOylikTolov = 0;
//     if (payInMonths > 1) {
//         harOylikTolov = Math.round(finalPrice / payInMonths); 
//         console.log(`Har oylik to'lov = ${harOylikTolov}`);
//     } else {
//         harOylikTolov = finalPrice;  
//         console.log(`Jami to'lov = ${harOylikTolov}`);
//     }
//     return harOylikTolov; 
// }

// function deviceReadyCallback(order) {
//     console.log(`${order.productName} (#${order.id}) tayyor bo'ldi!`);
//     if (order.payInMonths > 1) {
//         console.log(`Har oy to'lash: ${order.monthlyPayment} so'm, jami: ${order.payInMonths} oy`);
//     } else {
//         console.log(`Jami to'lov: ${order.monthlyPayment} so'm, biryo'la to'lanadi.`);
//     }
// }

// function orderDevice(order, callback) {
//     console.log(`${order.productName} (#${order.id}) buyurtma qilindi. Ombordan yetkazib berilmoqda...`);

//     setTimeout(() => {
//         let finalPrice = calculateFinalPrice(order.basePrice, order.payInMonths);  
//         let monthlyPayment = calculateInstallments(finalPrice, order.payInMonths);  

//         order.finalPrice = finalPrice;
//         order.monthlyPayment = monthlyPayment;

//         callback(order);  
//     }, 2000);  
// }

// products.forEach(order => orderDevice(order, deviceReadyCallback));



// //  homework 1
// function calc(n) {
//     return function (m) {
//         let sum = 0;

//         for (let i = 1; i <= n; i++) {
//             sum = i ** m
//         }
//         return sum;
//     };
// }
// console.log(calc(25)(2));


// // homework 2
// function calc(n) {
//     return function (m) {
//         let sum = 0;
//         for (let i = 0; i < n + 1; i++) {
//             if (i % i == 0 && i % 1 == 0) {
//                 sum = i + m;
//             }
//         }
//         return sum;
//     };
// }
// console.log(calc(1)(15));



// // homework 3
// function isEqual(str1 = '') {
//     return function (str2 = '') {
//         const sortedStr1 = str1.split('').sort().join('');
//         const sortedStr2 = str2.split('').sort().join('');
//         if (sortedStr1 === sortedStr2) {
//             return true;
//         } else {
//             return false;
//         }
//     };
// }
// console.log(isEqual("abc")("bac"));
// console.log(isEqual("apple")("elppa") );
// console.log(isEqual("abcde")("abode"));

 

// // homework 4
// function fibonacci(n) {
//     let a = 0;
//     let b = 1;

//     if (n >= 0) {
//         console.log(a);
//     } else if (n >= 1) {
//         console.log(b);
//     } 

//     for (let i = 2; i <= n; i++) {
//         let c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }

// fibonacci(7);


// // homework 5
// function func(arr = []) {
//     return function (m) {
//         let closest = arr[0];
//         let minDiff = Math.abs(arr[0] - m);

//         for (let i = 1; i < arr.length; i++) {
//             const currentDiff = Math.abs(arr[i] - m);
//             if (currentDiff < minDiff) {
//                 minDiff = currentDiff;
//                 closest = arr[i];
//             }
//         }

//         return closest;
//     };
// }
// console.log(func([16, 8, 2, 1, 5, 9, 3])(6));
// console.log(func([1, 12, 32, 2, 10, 5, 4])(30)); 


// 
