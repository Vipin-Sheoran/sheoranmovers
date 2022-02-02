import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebase'

function Login() {
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [Name,setname]=useState('')

    const SignIn=async(e)=>{
        e.preventDefault()
        const data=await auth.signInWithEmailAndPassword(email,password).then(auth=>{
          console.log(auth);
          navigate('/upload-transaction')
        }).catch(error=>alert(error.message))
     
       
        setEmail('')
        setPassword('')
        setname('')
    }
    const Register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth.user.uid);
            navigate('/upload-transaction')
        }).catch(error=>{
            alert(error.message)
        })
        setEmail('')
        setPassword('')
        setname('')
    }

  return <div className="items-center bg-white ml-72 mr-72 m-4">
      <h1 className="text-4xl m-4">Login Page</h1>
 <form className='flex flex-col px-4 border-2 border-black bg-gray-500'>
 <input
                    onChange={(e)=>setname(e.target.value)}
                    value={Name}
                    type="text"
                     className="my-4 py-2 px-2 border-2 border-black"
                    placeholder="Name"
                    required="required"
                    name='name'
                  />
                  <input
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                      id="email"
                       className="my-4 py-2 px-2 border-2 border-black"
                      placeholder="Email"
                      required="required"
                      name='email'
                      
                    />
                    <input
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                      type="password"
                      id="password"
                      className="my-4 py-2 px-2 border-2 border-black"
                      placeholder="Password"
                      required="required"
                      name='password'
                      
                    />
                    <button className="p-4 border-2 border-black my-4 bg-amber-400 hover:bg-amber-200" onClick={SignIn}>Sign In</button>
                    <button className="p-4 border-2 border-black mb-4 bg-amber-400 hover:bg-amber-200" onClick={Register}>Create Account</button>
 </form>
  </div>;
}

export default Login;

