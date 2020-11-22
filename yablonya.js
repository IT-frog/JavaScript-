
function Apple(weight,diametr){
  this.diametr = diametr
  this.weight = weight

}

Apple.prototype.moveTo = function(newDiametr, newWeight){
  this.diametr = newDiametr
  this.weight = newWeight
}

for(A = 0; A < 201;A++){

Apple.prototype.toString = function() {
  return `Созрело яблоко! Длина этого яблока ${this.diametr}см, а вес ${this.weight}грамм`
}


let A = new Apple

A.moveTo((Math.floor(4 + Math.random() * (10 - 4))) , (60, 120) - (Math.floor(15 + Math.random() * (25 - 15))) )



if (Math.random() * 100 < 80) {

  console.log((A.toString()))

  }

  else if (Math.random() * 100 < 20) {

 A.moveTo((Math.floor(1 + Math.random() * (10 - 6))), (Math.floor( (150 - 130) + Math.random() * (150 - 120))))
 console.log(A.toString(),'ЭТО ЯБЛОКО С ДЕФЕКТОМ')
  }

}
