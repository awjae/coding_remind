function solution(S) {
  let roads = S;
  let cnt = 0;
  while(roads.indexOf("X") > -1) {
      cnt++;
      roads = roads.substring(roads.indexOf("X") + 3);
  }
  return cnt;
}

console.log(solution(".X..X"), 2);
console.log(solution("X.XXXXX.X"), 3);
console.log(solution("XX.XXX.."), 2);
console.log(solution("XXXX"), 2);
console.log(solution(".X.X.X"), 2);
console.log(solution("..."), 0);
console.log(solution("...X"), 1);
console.log(solution("X..X"), 2);