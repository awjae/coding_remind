export default function Store(state = {}, reducer) {
  this.state = state;
  this.listener = [];
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

  //https://velog.io/@bepyan/Vanilla-JS-Flux-%ED%8C%A8%ED%84%B4%EC%9C%BC%EB%A1%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-feat.-Store

  // return new Proxy(data, {
	// 	get: function (obj, prop) {
	// 		return obj[prop];
	// 	},
	// 	set: function (obj, prop, value) {
	// 		if (obj[prop] === value) return true;
	// 		obj[prop] = value;
	// 		return true;
	// 	},
	// 	deleteProperty: function (obj, prop) {
	// 		delete obj[prop];
	// 		return true;
	// 	}
	// });
}