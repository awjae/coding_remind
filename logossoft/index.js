import App from './src/App.js';
import Store from './src/utils/Store.js';

new App({ target: document.querySelector(".app") });

const initState = { recentlyViewedList: [] };
const reducer = (state, actionKey, { text }) => {
  const { recentlyViewedList } = state;

  switch (actionKey) {
    case "ADD_ITEM":
      const newList = [text, ...recentlyViewedList.filter((v) => v !== text)];
      return { ...state, recentlyViewedList: newList };
    default:
      return { ...state };
  }
};
const a = new Store(initState, reducer);
const subFunc = () => {
  console.log("읽었지요")
  console.log(a.getState());
}
a.subscribe(subFunc);
a.dispatch("ADD_ITEM", { text: "디스패치이" });