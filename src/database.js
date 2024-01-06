import { initializeApp } from "firebase/app";
import { getDatabase  ,serverTimestamp , ref , set , onChildAdded , onValue , get , child , orderByChild} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-V97FbwQBbLIkbvn98P614nlkKSoGXUk",
    authDomain: "auth-979d8.firebaseapp.com",
    databaseURL: "https://auth-979d8-default-rtdb.firebaseio.com",
    projectId: "auth-979d8",
    storageBucket: "auth-979d8.appspot.com",
    messagingSenderId: "235770544453",
    appId: "1:235770544453:web:79093a7c45b3e323ca7e2c"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);



const generateID = () => {
  // Logic to generate a unique ID
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars.charAt(randomIndex);
  }

  return id;
};

export const storeMessage = (message , photo , userID , name) => {
  const messageId = generateID(); // Assuming you have the generateID function implemented

  // Storing the message in Firebase using the generated ID
  const messagesRef = ref(database, 'messages/' + messageId);
  set(messagesRef, {
    msg: message,
    timestamp: serverTimestamp(),
    name : name, 
    uid : userID,
    photo:photo
  }).then(() => {
    console.log('Message stored successfully!');
  }).catch((error) => {
    console.error('Error storing message:', error);
  });
};











export const getAllMessages = () => {
  const db = getDatabase();
  const messagesRef = ref(db, 'messages');

  return get(messagesRef)
    .then((snapshot) => {
      const messagesArray = [];
      
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const messageData = childSnapshot.val();
          messagesArray.push({ id: childSnapshot.key, ...messageData });
        });

        // Sort messages by timestamp in descending order (most recent first)
        messagesArray.sort((a, b) => b.timestamp - a.timestamp);
      }

      return messagesArray;
    })
    .catch((error) => {
      console.error('Error getting messages:', error);
      return []; // Return an empty array in case of an error
    });
};



// Usage example

