// const string = "b";
// const result = string.charCodeAt();
// console.log(`The ASCII value is: ${result}`);


// function rootFunction(){
//   let count=1;
//   return function(){
//   return count++
//   }
//   }
//   let instance = rootFunction(); 
//   console.log(instance());
//   console.log(instance());
//   console.log(instance());
//  ------------------------------------------------------
// let n = 0;
// function increment(){
//   n++;
// }
// increment();
// increment();
// console.log(n);

// let object={
//   name:'abc',
//   obj:{
//       obj1:{
//           name:'xyz',
//           obj2:{
//               name:'xyz'
//           }
//       }
//   }
// }
// let jsonCopy=JSON.stringify(object);
// object.obj.obj1.name = 'chitranshu';
// jsonCopy=JSON.parse(jsonCopy);
// console.log(jsonCopy);
// console.log(object);
// ...................................................................................
// let object={
//   name:"a",
//   obj:{
//     obj1:{
//       name:"b",
//       obj2:{
//         name:"c",
//         obj3:{
//           name:"d"
//         }
//       }
//     }
//   }
// }
// let  jsoncopy=JSON.stringify(object);
// object.obj.obj1.name="Shubham";
// jsoncopy=JSON.parse(jsoncopy);
// console.log(jsoncopy);
// console.log(object);



let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});


