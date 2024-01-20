import { useEffect ,useState } from "react"
import { useChattContext } from "./ChattContext/ChatContext"
import ChattRoom from "./components/ChattRoom"
import SignIn from "./components/SignIn"

function App() {

  const {signed} = useChattContext()




  return (
    <div className="App  bg-bodyBgColor  text-[#fff] h-screen w-full flex items-center justify-center flex-col">
        {signed ? <ChattRoom/> : <SignIn/>}

    </div>
  )
}

export default App
