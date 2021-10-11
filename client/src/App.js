import React, {useState} from 'react';
import {Router} from "@reach/router";
import Profile from "./views/Profile";
import './App.css';
import LoginReg from './views/LoginReg';
import DisplayCharities from './views/DisplayCharities';
import AddCharity from "./components/AddCharity";
import UpdateCharity from "./components/UpdateCharity";

function App() {

  const [ userName, setUserName] = useState("");

  return (
    <div className="App">
        <Router>
        {/* <Navbar path="/profile"/> */}
          <LoginReg path="/"  />
          {/* <LoginReg path="/" userName={userName} setUserName={setUserName} /> */}
          <Profile path="/profile/:userId"  />
          {/* <Profile path="/profile/:userId" userName = {userName} /> */}
          <AddCharity path="/charity/add" />
          <DisplayCharities path="/charities" /> 
          <UpdateCharity path="/charity/update" />
        </Router>


      {/* <Login path="/login" />
      <AddCharity path="/charity/add" />
      <DeleteCharity path="/charity/delete" />
      <Logout path="/logout" />
      <Profile path="/charity/profile" /> */}
    </div>
  );
}

export default App;
