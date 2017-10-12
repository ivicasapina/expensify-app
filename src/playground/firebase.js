import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD3R7JgNufh05HJP7K09DJ4etCY2HmP-Vg",
  authDomain: "moke-expensify.firebaseapp.com",
  databaseURL: "https://moke-expensify.firebaseio.com",
  projectId: "moke-expensify",
  storageBucket: "moke-expensify.appspot.com",
  messagingSenderId: "824509150003"
};

firebase.initializeApp(config);

const database = firebase.database();



// database.ref('notes/-Kw5EnhIl06_T0A6lyjI').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'react-native, angular, python'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const { name, job: { title, company } } = snapshot.val();

//   console.log(`${name} is a ${title} at ${company}.`);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Ivica',
//     'job/title': 'Software developer',
//     'job/company': 'DomNet'
//   });
// }, 3000);

// const onValueChange = database.ref().on('value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log('Error: ', error.mesage);
//   });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error while fetching data: ', error.mesage);
//   });

// database.ref()
//   .set({
//     name: 'Ivica Šapina',
//     age: 30,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Bugojno',
//       country: 'BiH'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((error) => {
//     console.log('This failed. ', error);
//   });

// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then(() => { console.log('successfully updated!'); })
//   .catch((error) => { console.log("Update failed", error.message); });;

// database.ref()
//   .remove()
//   .then(() => { console.log('successfully removed!'); })
//   .catch((error) => { console.log("Remove failed", error.message); });