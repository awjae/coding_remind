const arr = new Array(1000000).fill(0);

console.time("forEach 시간");
arr.forEach(el => el = 1);
console.timeEnd("forEach 시간");

console.time("for문 시간")
for(let i = 0; i < arr.length; i++) {
  arr[i] = 1;
}
console.timeEnd("for문 시간");