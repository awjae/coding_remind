const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve1")
  }, 5000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve2")
  }, 12000)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve3")
  }, 8000)
})


const test = async () => {
  await promise1.then(() => console.log(1))
  await promise2.then(() => console.log(2))
  await promise3.then(() => console.log(3))
}

const test2 = async () => {
  Promise.race([promise1, promise2, promise3]).then(text => console.log(text));
}

async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next()
  .then((res) => console.log(res.value)); 
asyncGen.next()
  .then((res) => console.log(res.value)); 
asyncGen.next()
  .then((res) => console.log(res.value));

async function* foo() {
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
}

async function generate() {
  let str = '';
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

// generate();