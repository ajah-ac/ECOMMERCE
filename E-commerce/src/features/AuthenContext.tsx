import React from 'react'
import {createContext,useContext,useEffect,useState} from 'react'
interface User{
    email:string,
    password:string
}
interface ContextType{
    user:User |null;
    login:(user:User)=>void;
logout:()=>void
}
const AuthContext=createContext<ContextType |undefined>(undefined)
type Children={
    children:React.ReactNode
}
const AuthenProvider = ({children}:Children) => {
    const [user,setUser]=useState<User|null>(null)
useEffect(()=>{
const stored=localStorage.getItem('user');
if(stored)setUser(JSON.parse(stored))
},[])
const login=(userData:User)=>{
    setUser(userData)
    localStorage.setItem('user',JSON.stringify(userData))
}
const logout=()=>{
    setUser(null)
    localStorage.removeItem('user')
}
  return (
   <AuthContext.Provider value={{user,login,logout}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthenProvider
export function useAuthContext(){
    const context=useContext(AuthContext)
    if(!context){
     throw new Error('No context ')
    }
    return context
}