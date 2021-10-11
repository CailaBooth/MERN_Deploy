import React, {useState} from 'react';
import axios from 'axios';

const Register = (props) => {
    const [confirmRegister, setConfirmRegister] = useState("");
    const [regErrors, setRegErrors] = useState({});

    // use single state object to hold all data
    const [ user, setUser ] = useState({
        userName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })
// using single function to update the state object find the input name attribute as key to the object
    const regHandler = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        setUser({ ...user, [event.target.name]: event.target.value})
    }

    const register = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/user/register", user,
        {withCredentials: true, })
        .then(response => {
            console.log(response.data);
            setUser({
                userName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                interests: ""
            })
            setConfirmRegister("Thank you for Registering! You may now Log in Below!");
            // setRegErrors({}); //reset errors ste if successful
        })
        .catch((error)=> {
            console.log(error.response);
            console.log(error);
            console.log("errors",error.response.data.errors);
            console.log(error.response.data.message);
            setRegErrors(error.response.data.errors);
        });
    };
    return(
        <div className="container">
            
            <h2>Register</h2>
            { 
                confirmRegister ?
                <h3 style={{color: "green"}}>{confirmRegister}</h3>
                : null
            }
            <form onSubmit={register}>
                <div className="form-group"> 
                    <label>UserName: </label>
                    {
                        regErrors.userName ?
                        <p className="errorText">{ regErrors.userName.message }</p>
                        : null
                    }
                    <input className="form-control-sm" type="text" name="userName" value={user.userName} onChange={(event) => regHandler(event)} />
                </div>
                <br />
                <div className="form-group">
                    <label>Email: </label>
                    {
                        regErrors.email ?
                        <p className="errorText">{regErrors.email.message}</p>
                        : null
                    }
                    <input className="form-control-sm" type="email" name="email" value={user.email} onChange={regHandler} />
                </div>
                <br />
                <div className="form-group">
                    <label>Password: </label>
                    {
                        regErrors.password ?
                            <p className="errorText">{regErrors.password.message}</p>
                            : null
                    }
                    <input className="form-control-sm" type="password" name="password" value={user.password} onChange={regHandler} />
                </div>
                <br />
                <div className="form-group">
                    <label>Confirm Password: </label>
                    {
                        regErrors.passwordConfirm ?
                            <p className="errorText">{regErrors.passwordConfirm.message}</p>
                            : null
                    }
                    <input className="form-control-sm" type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={regHandler} />
                </div>
                <br />
                <div className="form-group">
                    <label>Interests: </label>
                    {/* <p>(List some interests you have, specifically some related to charities / causes)</p> */}
                    <input className="form-control-sm" type="textarea" name="interests" value={user.interests} onChange={regHandler} />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary" type="submit"> Register </button>
                </div>
            </form>
        </div>
    )
}
export default Register;