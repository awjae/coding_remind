export default function Store(state = {}, reducer) {
  this.state = state;
  this.listeners = [];
  this.reducer = reducer;

  this.getState = () => {
    return { ...this.state };
  }

  this.subscribe = (func) => {
    this.listeners.push(func);
  }

  this.publish = () => {
    this.listeners.forEach((func) => func());
  }

  this.dispatch = async (actionKey, { ...payload } = {}) => {
    this.state = await this.reducer(this.state, actionKey, { ...payload });
    this.publish();
  }

}

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