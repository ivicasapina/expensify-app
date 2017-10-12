const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Moke',
      age: 30
    });

    // reject('Something went wrong!');
  }, 2000);
});
console.log('before');

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('after');
