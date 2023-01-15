function solution(text) {
  const set = new Set();
  const passed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  let tagedStr = text.split(" ").filter(el => el[0] === "#").join("");
  
  while(tagedStr.indexOf("#") > -1) {
      let start = tagedStr.indexOf("#");
      tagedStr = tagedStr.substr(tagedStr.indexOf("#"));
      let end;
      for (let i = 1; i < tagedStr.length; i++) {
          if (passed.indexOf(tagedStr[i]) < 0) {
              end = i;
              // console.log(tagedStr.substr(start, end))
              let tag = tagedStr.substr(start, end);
              set.add(tag);
              tagedStr = tagedStr.substr(end);
              console.log(tagedStr)
          }
      }
      set.add(tagedStr);
      tagedStr = "";
  }

  return Array.from(set);
}
const text = `
  Today, #Java#script is nearly ubiquitous. Enterprises have been able to greatly reduce training costs and increase #developer productivity because #frontend #Java#script developers can work on the server side, and #vice-versa, eliminating the context switches and enabling all developers to pull from the same #knowledge base and vast module ecosystem.
`;
solution(text);