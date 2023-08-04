setInterval(()=>{
    console.log("i am a girl")
} , 1000)

setTimeout(() => {
    console.log("i am a female")
}, 1000);

setImmediate(() => {
  console.log("i am the first");
});

// // import global from "global"
// //when we call the global , we have access to only the CPU

// function timer(x: number, y: number) {
//   setInterval(() => {
//     console.log(x + y);
//   }, 10000);
// }
// timer(2, 3);
// // setInterval(())

// // function increase(x: number, y: number{

// // })
// setImmediate(() => {
//   console.log("i am the first");
// });

// setTimeout(() => {
//   console.log("its time out");
// }, 10000);

// // import os from "os";
// // console.log(os);
// //when you call the os , you have access to cpu , hard disk , network e.t.c
// //npm i @types/node to get all the os processes that can be accessed

// //30-09-2022
// console.log(global);
// setInterval(() => {
//   console.log("skip this ad in five secs");
// }, 50000);

// setInterval(() => {
//   let el = "skip this ad in ten secs";
//   console.log(el);
//   setTimeout(() => {
//     let skip = "press this button to skip";
//     console.log(skip);
//   }, 10000);
// }, 1000);