function solution(want, number, discount) {
  var answer = 0;
  const tree = {};

  want.forEach(el => {
    
      tree[el] = [];
      let index = discount.indexOf(el);
      while(index > -1) {
          tree[el].push(index);
          index = discount.indexOf(el, index+1);
      }
  })

  return answer;
}
solution(["banana", "apple", "rice", "pork", "pot"], 1, ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]);
