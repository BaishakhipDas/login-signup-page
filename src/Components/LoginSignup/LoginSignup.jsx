import React, { useState } from 'react'
import "./LoginSignup.css"

import userIcon from '../../assets/user.png'
import emailIcon from '../../assets/email.png'
import lockIcon from '../../assets/padlock.png'

const LoginSignup = () => {
    const [action,setAction] = useState("Sign Up");
    
    let handleSignUp = () => {
        setAction("Sign Up");
    }
    let handleLogin = () => {
        setAction("Login");
    }
  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {/* <div className="input">
                <img src={userIcon} alt="" className='icon' />
                <input type="text" placeholder='Name' />
            </div> */}

            {action ==="Login"?<div></div>:<div className="input">
                <img src={userIcon} alt="" className='icon' />
                <input type="text" placeholder='Name' />
            </div>}
            <div className="input">
                <img src={emailIcon} alt="" className='icon' />
                <input type="email" placeholder='email' />
            </div>
            <div className="input">
                <img src={lockIcon} alt="" className='icon' />
                <input type="password" placeholder='password' />
            </div>
        </div>

        {/* <div className="forgot-password">
            Lost Password? <span>Click Here</span>
        </div> */}
        {action === "Sign Up"?<div></div>:<div className="forgot-password">
            Lost Password? <span>Click Here</span>
        </div>}

        <div className="submit-container">
                {/* <div className="submit">Sign Up</div>
                <div className="submit">Login</div> */}
                <div className={action === "Login"?"submit gray":"submit"} onClick={handleSignUp}>Sign Up</div>
                <div className={action === "Sign Up"?"submit gray":"submit"} onClick={handleLogin}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
