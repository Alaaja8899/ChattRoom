import React from 'react'

function MessageComponent(props) {
    const {displayName , email , photoURL}=props.user 
    const {message ,uid,photo , userName} = props.data
    const isUser = props.user.uid === uid
  return (
    <div>
        {isUser ? <SenderMessage photoURL={photo} message={message} name={userName} /> :  <Reciever photoURL={photo} message={message} name={userName} />}      

    </div>
  )
}




const SenderMessage=(props)=>{

    return(
        <div className="Sended flex items-center gap-2 justify-end">
            
        <h2 className="message rounded bg-btnBg min-w-[50px] px-3 py-2">{props.message}</h2>

        <div className="profile-pic rounded-full w-[50px] h-[50px] overflow-hidden">
            <img src={props.photoURL} />
        </div>


    </div>
    )
}


const Reciever =(props)=>{
    
    return (
        
        <div className="revieved flex   justify-start w-full items-center gap-3">                
            <div className="profile-pic rounded-full w-[50px] h-[50px] overflow-hidden">
                <img src={props.photoURL} />
            </div>
            
            <div className="cont flex flex-col">
            <h2>{props.name}</h2>            
            <h2 className="msg rounded bg-[#fff] min-w-[50px] text-[#000] px-3 py-2">{props.message}</h2>
            </div>

            </div>


    )
}


export default MessageComponent
