// Классы

// let a = {
//     x: 20,
//     y: 10,
//     moveTo:  function(newX, newY) {
//         this.x = newX
//         this.y = newY
//     }
// }

// let b = {
//     x: 20,
//     y: 10,
//     moveTo:  function(newX, newY) {
//         this.x = newX
//         this.y = newY
//     }
// }

// let c = {
//     x: 20,
//     y: 10,
//     moveTo:  function(newX, newY) {
//         this.x = newX
//         this.y = newY
//     }
// }


// console.log(a.x, a.y)
// a.moveTo(10, 5)
// console.log(a.x, a.y)


// Создание прототипа обьекта ()

function Point(x,y) {
     this.x = x
     this.y = y
}

Point.prototype.moveTo = function(newX, newY){
    this.x = newX
    this.y = newY
}

Point.prototype.toString = function() {
    return `Точка с координатами (${this.x};${this.y})`
}

let n = 4 //new Number(4)
let word = 'hello' //new string('hello')


let A = new Point(12,50)
let B = new Point(6,14)

A.moveTo(10, 10)

console.log(A.toString())
console.log(B.toString())

/*
 Фруктовый сад
 Дано 1 дерево (яблоня)
 Яблоня каждый год дает 200 яблок
 tree ={
      name "Яблоня",
      fruits: 200
 }

 1) Создать класс с фруктом
    Фрукт имеет диаметр от 4см до 10см
    Фрукт имеет вес 4см - 50г, 10см - 120г (посчитать в зависимости от диаметра)
    Фрукт может иметь дефект (20%) true

 2) Наполнить яблоню массивом фруктов в зависимости от их параметров






 */
