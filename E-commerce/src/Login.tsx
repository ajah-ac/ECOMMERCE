import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetchData from "./features/useFetchData"
import { useAuthContext } from "./features/AuthenContext"
interface User {
    name:string,
    email: string,
    password: string
}
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const {login}=useAuthContext()
    const { data } = useFetchData<User[]>('https://api.escuelajs.co/api/v1/users')
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        
        if (!data) { return }
        const findUser = data.find(user => user.email === email && user.password === password)
        if (!findUser) {
            return 
     }

        else{
           login(findUser);
navigate('/categories', {replace:true})}

    }

    return (
        <div className=" flex justify-center m-auto items-center h-screen">
            <form action="" onSubmit={handleSubmit} className="flex  rounded-xl justify-center  space-y-8 items-center flex-col w-md h-96 m-auto shadow-md align-center">
                <input
                    onChange={e => setEmail(e.target.value)}
                    className="border p-2 pl-8 rounded-2xl shadow-md" type="email" required placeholder="Enter Email" />
                <input
                    onChange={e => setPassword(e.target.value)}

                    className="border p-2 pl-8 rounded-2xl shadow-md" type="password"
                    placeholder="Enter password" required />
                <button type='submit'
                    className="border-blue-950 p-2 pl-8 pr-8 bg-blue-200 rounded-2xl shadow-md">Login</button>
            </form>
        </div>
    )
}

export default Login