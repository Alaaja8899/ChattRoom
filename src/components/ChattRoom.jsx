import React, { useEffect, useState  , useRef} from 'react';
import { useChattContext } from '../ChattContext/ChatContext';
import MessageComponent from './MessageComponent';
import {useObject , useObjectVal} from "react-firebase-hooks/database"
import {ref , push , serverTimestamp , orderByChild , query} from "firebase/database"
import {generateRandomID }from "../ExtraFunctions"
import { database } from '../database';
export default function ChattRoom() {
  // Accessing functions and state from the context
  const { SignOut} = useChattContext();
  const chatBodyRef = useRef(null);
  const [message , setMessage] = useState('')

  const messagesRef = ref(database, 'messages');
  const queryRef = query(messagesRef, orderByChild('timestamp'));
  const [snapshot, loading, error] = useObject(queryRef);

  // Fetching user details from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  const { displayName, email, photoURL, uid } = user[0];


  const sendMessage = async () => {
    try {
      const messageRef = ref(database, 'messages');
      await push(messageRef, {

        userName: displayName,
        message: message,
        photo:photoURL,
        uid:uid,
        email : email,
        timestamp:serverTimestamp()
        // Any other properties you want to save with the message
      });
      setMessage(''); // Clear the input field after sending message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
    }

  };

  

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };
  const snapshotToArray = (snapshot) => {
    const array = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      array.push(item);
    });
    return array;
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [snapshot]);

  return (
    <div className='md:w-[30rem] w-full flex flex-col h-full bg-msgBodyBg'>
      {/* Header section */}
      <header className='flex bg-headerBg justify-between h-[60px] items-center '>
        <h2 className='qurxin text-2xl px-3'>⚛️🔥💬</h2>
        <button onClick={SignOut} className=' bg-bodyBgColor  w-[11rem] rounded font-bold h-5/6 mx-1'>
          Signout
        </button>
      </header>

      {/* Main chat body */}
      <div className='msgBody h-full overflow-y-scroll gap-3 flex flex-col px-2' ref={chatBodyRef}>
        <h2 className='text-center text-[grey] py-5 px-3'>Welcome to the chat 👋 {displayName}</h2>
        {/* Rendering messages */}
        {snapshot && snapshotToArray(snapshot).map((chat) => <MessageComponent user={user[0]} data={chat} />)}

        {}
      </div>

      {/* Message input form */}
      <form className='w-full flex' onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type='text'
          placeholder='Write your message'
          className='w-full text-[#000] px-3 outline-none'
          value={message}
        />
        <button className=' bg-btnBg px-3 py-2 rounded'>Send</button>
      </form>
    </div>
  );
}
