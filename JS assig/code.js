function isPrime(){
    var arr = [33,46,54,67,89,90];
    var primes = [];
    for(var i = 0; i<arr.length; i++){
        if(isElementPrime(arr[i])){
            primes.push(arr[i]);
        }
    }
   document.getElementById("output1").innerHTML = primes; 
}
function isElementPrime(n){
    if(n === 0 || n === 1)
        return false;
    else if(n === 2)
            return true;
        else {
            for( var i = 2; i<n; i++){
                if( n % i === 0)
                        return false;
                else
                    return true;
            }
        }
}
function isMaxNo(){
    var item, m = 0;
    var mf = 1;
    var arr = [33,46,54,54,67,89,90,54];
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            if(arr[i] == arr[j]){
                m++;
                if(mf < m){
                    mf = m;
                    item = arr[i];
                }
            }    
        }
        m = 0;
    }
    document.getElementById("output2").innerHTML = item;
}
function swapCase(){
    var s = document.getElementById("string").value;
    var ans = s.split('').map((s) => s === s.toUpperCase() ? s.toLowerCase(): s.toUpperCase()).join('');
    document.getElementById("output3").innerHTML = ans;
}
function sumOfSquares(){
    var array = [1,2,3,4,5];
    let sum = 0;
    for(var i = 0; i<array.length; i++){
        sum += array[i]*array[i];
    }
    document.getElementById("output4").innerHTML = sum;
}
function isOddEven(){
    for(let i = 0; i <= 15; i++){
        if(i % 2 == 0)           
             document.getElementById("output5").innerHTML +=  i + " is even <br>";
        else         
            document.getElementById("output5").innerHTML +=   i + " is odd <br>";     
        }
}
function toTruncate(){
    var str = document.getElementById("str").value;
    var length = document.getElementById("length").value;
    var ending = document.getElementById("ending").value;
    if(length == null){
        length = 500;
    }
    if(ending == null){
        ending = "...";
    }
    if(str.length>length){
        document.getElementById("output6").innerHTML = str.substring(0,length-ending.length) + ending;
    }else
        document.getElementById("output6").innerHTML = str;
}
function findLarge(){
    var i;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if(num1 > num2 )
        document.getElementById("output7").innerHTML = "The largest is " + num1;
    else
        document.getElementById("output7").innerHTML = "The largest is " + num2;       
}
function toSort(){
    var student = [
                    {id : 12022, name : "Soha", tutor : "Diyab"},
                    {id : 12044, name : "Manal", tutor : "Meera"},
                    {id : 12032, name : "Jameel", tutor : "Gokul"},       
    ];
    const sorted = student.sort((a, b) => {
            return a[name] > b[name];
          });
    let sortedArr = {};
    for(var student in sorted) {
        const firstLetter = sorted[student].name[0];
        if(sortedArr[firstLetter]) {
          sortedArr[firstLetter].push(sorted[student]);
        } else {
          sortedArr[firstLetter] = [sorted[student]]; 
        }
        document.getElementById("output8").innerHTML = sortedArr;
      }
      console.log("sorted",sortedArr);
    
      }
function toPrint(){
    var txt = "Javascript";
    var str = "";
    for(var i of txt){
        str += txt.substring(1,i) ;   
    }   
        document.getElementById("output9").innerHTML =str;
}

    

function toDisplay(){
    var str = "";
    for(var i = 1; i <= 4; i++){
        for(var j = 1; j <= 4; j++){
            if(i >=j ){
                str = str.concat("*");
                document.getElementById("output10").innerHTML = str;
            }
        }
        str = str.concat("<br>");
        document.getElementById("output10").innerHTML = str;
    }
}

   
