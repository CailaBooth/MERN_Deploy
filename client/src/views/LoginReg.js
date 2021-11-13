import React from 'react';
import Register  from "../components/Register";
import Login from "../components/Login";
import logo from "../components/logo.png";

const LoginReg = (props) => {
    // const {userName, setUserName} = props;

    return (
        <div>
            <div>

                <h1 className="welcome">Welcome To</h1>
                <h1 className="welcome">Big Differences Small Charities</h1>
                <h3>Where Everybody Can Make a Difference</h3>
            </div>
            <div className="register">
                <Register />
            </div>
            <div className="login">
                {/* <Login userName={userName} setUserName={setUserName}/> */}
                <Login />
            </div>
        </div>
    )
}
export default LoginReg;