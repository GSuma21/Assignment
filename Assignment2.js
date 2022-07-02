// Assignment 2:

// Given a string s, find the ASCII value of each character iteratively. If the ASCII value is even, increment the next character by (ASCII_value % 7). If the ascii value is odd, decrement the previous character by (ASCII_value % 5). Output the newly formed string. 
// Note:
// If a character has already been changed once, do not change that character again. 
// If the new number is an invalid ASCII value, replace it with 83. 
// Eg.

// s: sHQen}
// ASCII: 115-72-81-101-110-125

// First pass (115): No previous character.
// 	115-72-81-101-110-125
// Second pass (72): Increment the next character by (72%7)
// 	115-72-83-101-110-125
// Third pass(83): Decrement previous character by (83%5)
// 	115-69-83-101-110-125
// Fourth pass (101): Previous character already changed once.
// 	115-69-83-101-110-125
// Fifth pass(110): Invalid ASCII value.
// 	115-69-83-101-110-83
// Sixth pass(83):
// 	115-69-83-101-107-83

// Final Answer: 
// 	115-69-83-101-107-83 => sESekS



var s= "sHQen}"

/* A-65 to  Z-90
a-97 o z-122 */
var ans1 = ""

for(let i=0;i<s.length;i++){
  var a = (s.charCodeAt(i)) 
  if(i == s.length-1){
  ans1 += a
  }else{
     ans1 += a+"-"
  
  }
}
console.log("given String: "+s)
console.log("ASCII: "+ans1)
var arr = ans1.split("-").map(Number)
var arr1 = ans1.split("-").map(Number)

/*  console.log(arr) */
for(let i=1;i<arr.length;i++){

if(arr[i]%2 == 0){
    
     if(arr[i+1]>64 && arr[i+1]<91 || arr[i+1]>96 && arr[i+1]<122){
      var inc = arr[i]% 7
         if(arr[i+1] == arr1[i+1]  ){
         arr[i+1] += inc
        } 
       
     }else{
       arr[i+1] = 83
     }
        
  }else{
     var dec = arr[i]% 5
     if(arr[i-1] == arr1[i-1]){
       arr[i-1] -= dec
     }   
  }
  /* console.log(arr) */

  
}

 console.log("ASCII of Ans String: "+arr.join("-"))

 var finalans = ""
 for(let i=0;i<arr.length;i++){
  finalans += String.fromCharCode(arr[i])
 }
 console.log("Final Ans: "+finalans)



 // fiddle link to the assignment:https://jsfiddle.net/Suma_/9n823ymb/88/