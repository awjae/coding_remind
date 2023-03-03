class Temp {
  constructor(number) {
      this.number = number;
  }
}
Temp.prototype.value = function () {
  return this.number;
}

function solution(A) {
  return A.map(number => {
      return new Temp(number);
  })
}
