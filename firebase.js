// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyAAYSyJf1YPFU7bXB87hKuPSUzJ53G0tt4",
  authDomain: "maher-phone-18581.firebaseapp.com",
  projectId: "maher-phone-18581",
  storageBucket: "maher-phone-18581.appspot.com",
  messagingSenderId: "452858222210",
  appId: "1:452858222210:web:12fa439652c4aa0b48869b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
