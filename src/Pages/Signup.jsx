import React from "react";
import { useState } from "react";

const Signup = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [match, setMatch] = useState(false);
  const [arr, setArr] = useState([]);

  const handlesign = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
    };
    setArr((prev) => [...prev, obj]);
    setLogin(true)
    console.log(obj);
    alert("signup successfull");
  };

  

  return (
    <div>
        {
            <div>
                <form onSubmit={handlesign}>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value='Signup' />
          </form>
            </div>
            
        }
    </div>
  );
};

export default Signup;
