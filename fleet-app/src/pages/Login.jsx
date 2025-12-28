import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(()=>{
    emailRef.current.focus();
  },[]);


  const handelLogin =()=>{
    if (email=== "admin@gmail.com" && password==="admin1234"){
        alert("Login Successful");
        setIsAuth(true);
        navigate("/admin");
    }else{
            alert("Invalid Credentials");
        
        
    }
  };


  return (
    <div>
      <h2>Login</h2>

      <input
      ref={emailRef}
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handelLogin}>Login</button>
    </div>
  );
};

export default Login;
