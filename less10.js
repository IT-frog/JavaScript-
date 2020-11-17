/*


Типы данных
Number (4)
String ("ооло")
Bollean (false)
underfined
null
Object{}
      []

Управляющие конструкции

if (true){

} else{

}

Циклы

While (true);

for (;true;){

}


function(n) {
return n + n;

}

*/
let words = ["помидор", "Тыква", "Огурец"]
 


const getWord = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getWord(words));