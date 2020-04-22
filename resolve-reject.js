/*
promise.then((res) => {}, (rej) => {})

a mesma coisa: 

promise.then((res) => {})
promise.catch((rej) => {})
*/
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

coinFlip
.then((data) => console.log(data, '1'))
.then(() => console.log('End 1'))
.catch((err) => console.log('Erro 1'))
.catch(() => { throw err}) //para a execução


// catch não para a execução do código
// throw 

