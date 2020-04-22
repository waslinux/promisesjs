
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 2000)
})

console.log('Begin')


// promise.then((data) => console.log(data))

// function a (text) {
// promise.then(a) {} ----> o a (função a) seria o data da linha de cima

promise.then(console.log)