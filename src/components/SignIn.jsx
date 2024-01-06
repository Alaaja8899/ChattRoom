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
    <div className='flex flex-col gap-3 px-4 items-center justify-center mx-auto'>

        <div className="intro text-center">
            <p className="warning">Do not violate the community guidelines or you will be banned for life! 💀</p>
            <br />
            <p className="warning">Wax rabsha ah hasameen haddii kale ciwanka dhanaa lagaa xiraa 💀</p>

        </div>


        <button onClick={Sign} className=' bg-btnBg px-3 py-2 rounded'>SigInWithGoogle</button>
    </div>
  )
}

export default SignIn
