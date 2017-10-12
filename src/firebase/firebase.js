import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {
  firebase,
  database as default
};

// *****************************************************************************
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value',
//   (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// const expenses = [{
//   desctription: 'expense One',
//   note: '',
//   amount: 100,
//   createdAt: 1000
// }, {
//   desctription: 'expense Two',
//   note: '',
//   amount: 200,
//   createdAt: 2000
// }, {
//   desctription: 'expense Three',
//   note: '',
//   amount: 300,
//   createdAt: 3000
// }];

// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// database.ref('expenses').push({
//   desctription: 'expense Three ipo',
//   note: '',
//   amount: 300,
//   createdAt: 3000
// });