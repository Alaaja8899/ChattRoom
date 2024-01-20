import React from 'react'
import { useChattContext } from '../ChattContext/ChatContext'
import {signInWithPopup} from "firebase/auth"
import {auth , provider} from "../config"
function SignIn() {
    const {CheckAuth} =useChattContext()
    const Sign =()=>{
            signInWithPopup(auth , provider).then((data)=>{
                localStorage.setItem("auth" , true)
                localStorage.setItem("user", JSON.stringify(data.user.providerData));
                CheckAuth();
            })
    }
  return (
    <div className='flex flex-col gap-3 px-4 items-center justify-center mx-auto text-2xl'>

        <div className="intro text-center">
            <p className="warning">Do not violate the community guidelines or you will be banned for life! 💀</p>
            <br />

            <p>To go into the chatt-room simply click the SigInWithGoogle button below</p>

        </div>


        <button onClick={Sign} className=' bg-btnBg px-3 py-2 rounded mt-10'>SigInWithGoogle</button>
    </div>
  )
}

export default SignIn
