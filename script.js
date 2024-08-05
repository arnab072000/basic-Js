// let arr = [1,2,3,4,5];
// const newArr = []
// arr.forEach(val => {
//     newArr.push(val*2);
// });
// console.log(newArr);


// function sample(a, b, callBack){
//     let c = a+b;
//     let d = a - b;
//     let result = callBack(c,d);
//     return result;
// }

// console.log(sample(6,3, function(c,d){
//     let ans = c*d;
//     return ans;
// }));


// const dataPromise = fetch("https://api.kanye.rest/");
 
// dataPromise.then(function(res){
//     let data = res.json();
//     //console.log(data);
//     return data;
// })
// .then((res) => console.log(res))
// .catch(function(err){
//     throw new Error(err);
// });



//dataPromise.then((res) => console.log(res));

// function alarm (person, delay){
//   return new Promise((resolve,reject) => {
//     if(delay>0){
//        setTimeout(()=>{
//         resolve(person)
//     },delay)
//     }
//     reject("Time need grater than 0")
//   })
// }


// console.log("start");
// alarm("Arnab", -2000).then((data) => {
//     console.log(data);
// }).catch((data)=> {
//     console.log(data);
// });
// console.log("end");


// async function alarm (person, delay){
//       if(delay>0){
//          setTimeout(() =>{
//           console.log(person);
//       },delay)
//       } else{
//         console.log("time need grater than zero")
//       }
// }


// console.log("first");
// async function alarmUpdate () {
//     try {
//         const data = await alarm();
//         console.log(data);
//     } catch (error){
//         console.log("Erroe :" + error)
//     }
// }
// alarmUpdate("Arnab", -2000);
// console.log("end");






// const helperPromise = function (str1, str2) {
//     const promise = new Promise(function (resolve, reject) {
//         const x = `${str1}`;
//         const y = `${str1}`;
//         if (x === y) {
//             resolve("Strings are same");
//         } else {
//             reject("Strings are not same");
//         }
//     });

//     return promise;
// };


// console.log("start");
// async function demoPromise(ram,sam) {
//     try {
//         let message = await helperPromise();
//         console.log(message);
//     } catch (error) {
//         console.log("Error: " + error);
//     }
// }
// demoPromise();
// console.log("end");





// function weatherUpdate(){
    
// }
