

setInterval(()=>{
    console.log("i am a girl")
} , 1000)

setTimeout(() => {
    console.log("i am a female")
}, 1000);




function timer(x: number, y: number) {
  setInterval(() => {
    console.log(x + y);
  }, 10000);
}
timer(2, 3);



setTimeout(() => {
  console.log("its time out");
}, 10000);


// console.log(global);
setInterval(() => {
  console.log("skip this ad in five secs");
}, 50000);

setInterval(() => {
  let el = "skip this ad in ten secs";
  console.log(el);
  setTimeout(() => {
    let skip = "press this button to skip";
    console.log(skip);
  }, 10000);
}, 1000);