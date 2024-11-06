// // // Vazifa 1

// 1-masala
// function calc(a, b) {
//     return a + b
// }
// console.log(calc(prompt("birinchi sonni kiriting")-0, prompt("birinchi sonni kiriting")-0));

// // 2-masala

// let arr = [1,2,3,4,5]
// function calc(list) {
//     let res = 0
//     for (let item = 0; item < list.length; item++) {
//         res += list[item];
//     }
//     console.log(res); 
// }
// calc(arr);

// // 3-masala
// let arr = [-1, -2, 3, -4, 5, -100, -5];
// function plus(list) {
// for (let i = 0; i < list.length; i++) {
//     if (list[i] < 0) {
//         list[i] = -list[i];
//     }
// }
// console.log("Musbat qiymatli array:", list);
// }
// plus(arr)

// // 4-masala
// let arr = ["5" , "salom", "11", "true" , "false"]

// function hello(list) {
//     for (let item = 0; item < list.length; item++) {
//         if (typeof list[item] === "string") {
//             if (!isNaN(list[item])) {
//                 list[item] = Number(list[item]);
//             } else {
//                 list[item] = 0;
//             }
//         }       
//     }
//     console.log(list);
// }
// hello(arr)


// // // 5-masala
// const personArr = [
//     { name: "Abdulloh", 
//       age: 19, 
//       status: false 
//     },
//     { name: "Ibrohim", 
//       age: 20, 
//       status: true 
//     },
//     { name: "Shodiyor", 
//       age: 18, 
//       status: false 
//     },
//     { name: "Eshmat", 
//       age: 20, 
//       status: false
//     }
// ];
// function filterStudents(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].status === false) {
//             console.log(arr[i].name);
//         }
//     }
// }
// filterStudents(personArr)

// // // 6-masala
// let x = 10
// let y = 20
// let z = 60
// function calc(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(calc(x, y, z));


// // // 7-masala  
// let array = [2, 3, 5, 5,3,7,8,1]
// function modify(arr) {
//         if (arr[0] % 2 === 0) {
//             arr[0] += 1;
//         } else {
//             arr[0] += 1;
//         }
//     return arr;
// }
// console.log(modify(array));



// // // 8-masala 
// let arr1 = ["salom", "hello", "N77", ]
// let arr2 = ["N99", "hello", "Alik", "salom"]
// function findDuplicates(a, b) {
//     let duplicates = [];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 duplicates.push(a[i]);
//             }
//         }
//     }
//     return duplicates;
// }
// console.log(findDuplicates(arr1, arr2));



// // // // VAzifa 2

// // 1-masala
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };
// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }

// // 2-masala
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleyball",
//     interest: "Sleep"
// };
// const persons = Object.assign({}, person1, person2);
// console.log(persons);


// // // 3-masala
// let arr = [1, 2, 3 , 5, 6]
// function add(list) {
//     if (list.length > 0) {
//         list[list.length - 1] += 1;
//     }
//     return list;
// }
// console.log(add(arr));

// // // 4-masala
// let arr = [2, 2, 3]
// function calc(list) {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     if (list[0] % 2 === 0) {
//         list.unshift(sum);
//     } else {
//         list.push(sum);
//     }
//     return list;
// }
// console.log(calc(arr));


// // // 5-masala
// let arr = [1, 2, 3, 4]
// function change(list) {
//     if (list.length > 1) {
//         let temp = list[0];
//         list[0] = list[list.length - 1];
//         list[list.length - 1] = temp;
//     }
//     return list;
// }

// console.log(change(arr));

// // // 6-masala 
// function collect(times, arr = []) {
//     if (times === 0) return arr;
//     let word = prompt("So'z kiriting");
//     arr.push(word);
//     return collect(times - 1, arr);
// }
// let collectArr = collect(6);
// console.log(collectArr);

// // // // 7-masala
// function askQuestion(count = 3, list = []) {
//     if (count === 0) {
//         console.log("list:", list);
//         return;
//     }
//     let question = prompt("Savol kiriting:");
//     let answer = prompt(question);
//     list.push({ savol: question, javob: answer });
//     return askQuestion(count - 1, list);
// }
// askQuestion();
