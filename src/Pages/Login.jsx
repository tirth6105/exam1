import React, { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logine, setLogine] = useState();
  const [loginp, setLoginp] = useState();
  const [match, setMatch] = useState(false);
  const [arr, setArr] = useState([]);

  const handlelogin = (e) => {
    e.preventDefault();
        arr.map((el)=>{
            if(el.email== logine && el.password== loginp){
                setMatch(true)
            }
            if(match==true){
                alert("login sucssecfull")
            }
        })
  };
  return (
    <div>
      <form onSubmit={handlelogin}>
            <input type="email" placeholder="email" value={email} onChange={(e) => setLogine(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setLoginp(e.target.value)}/>
            <input type="submit" value='login' />
          </form>
    </div>
  )
}

export default Login