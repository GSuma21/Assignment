// Assignment 1:

// Given a string s and a number x, print the shortest substrings which start and end with the same character and have lengths greater than or equal to x. If multiple substrings exist with the same shortest length, print them all.

// Eg: 
// s: abccdbacca  
// 	x: 3		Answer: acca
// x: 4		Answer: acca
// x: 5		Answer: bccdb cdbac
// x: 6 		Answer:  abccdba
// x: 7		Answer: abccdba
// x: 8		Answer: abccdbacca  
//x:11     Answer: not-found

// All Substrings : ["a", "b", "c", "c", "d", "b", "a", "c", "c", "a", "cc", "cc", "acca", "bccdb", "cdbac", "ccdbac", "cdbacc", "abccdba", "ccdbacc", "abccdbacca"]


function doit(s,x){
    var result=[];
    var n= s.length;
    
    for(i=0;i<n+1;i++){
       for(j=i+1;j<n+1;j++){ 
       var a = s.substring(i,j);
       if(a[0] == a[a.length-1] && a.length>=x)
          result.push(a)      
       }
       
       
    }
    result = result.sort((a,b)=>a.length-b.length)
    return result
}
    
    var x = 6
    var s = "abccdbacca"
    var ans = doit(s,x)
    console.log(ans) 
    if(ans.length ==0){
    console.log("x: "+x+" not found")
    }else{
    var x1 = ans[0].length;
    var ans1 = []
    for(let i=0;i<ans.length;i++){
      if(ans[i].length == x1){
         ans1.push(ans[i])
      }
      
    }
    console.log("x: "+x+" Answer: "+ans1)
    
}
    

// fiddle link to the assignment: https://jsfiddle.net/Suma_/py74axsk/2/
    
    