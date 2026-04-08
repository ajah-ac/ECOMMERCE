import { useState } from "react"



const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    return (
    <div className=" flex justify-center m-auto items-center h-screen">
            <form action="" className="flex  rounded-xl justify-center  space-y-8 items-center flex-col w-md h-96 m-auto shadow-md align-center">
                <input
                onChange={e=>setEmail(e.target.value)}
                 className="border p-2 pl-8 rounded-2xl shadow-md" type="email"  required  placeholder="Enter Email"/>
                <input
                 onChange={e=>setPassword(e.target.value)}

                className="border p-2 pl-8 rounded-2xl shadow-md" type="password" 
                placeholder="Enter password" required/>
                <button type='submit'
                className="border-blue-950 p-2 pl-8 pr-8 bg-blue-200 rounded-2xl shadow-md">Login</button>
            </form>
</div>
    ) 
}

export default Login