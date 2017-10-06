//
//  Object destucturing
//

// const person = {
//   name: 'Moke',
//   age: 30,
//   location: {
//     city: 'Uskoplje',
//     temp: 15
//   }
// };

// const { name, age, location: { city, temp } } = person;
// console.log(`${name} is ${age}`);
// console.log(`${city} is ${temp}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { publisher: { name: publisherName = 'Self-Published' } } = book;

// console.log(publisherName);

//
//  Array destucturing
//
const address = ['1299 s Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} cost ${medium}.`);