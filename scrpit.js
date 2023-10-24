let myPromise = new Promise((resolve,reject)=> {
    isOkay = true
    if(isOkay)
    resolve('all Good')
reject(Error('all is not Good'))
})
myPromise.then(succesMsg => console.log(succesMsg)).catch(err => console.log(err))





// fetch data from api
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      document.body.innerHTML += `<b>ID:</b> ${user.id}  <b>NAME:</b> ${user.name} <br>`
    });
  })



// fetch from text file
fetch('info.txt').then((data) => data.text()).then((result) => console.log(result))