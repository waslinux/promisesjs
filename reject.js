const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('End'), 2000)
})

promise.then((data) => console.log(data)).catch((err) => console.log('oops', err))

console.log('Begin')