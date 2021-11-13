import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from "../components/logo.png";
import Logout from '../components/Logout';


const Profile = (props) => {
    const {id} = props;
    const{ userName, setUserName} = props;
    const [user, setUser] = useState({});
    // const [userFavoriteList, setUserFavoriteList] = useState();
    const [userCharity, setUserCharity] = useState({});
    // const [id, setId] = useState("");
    const [userCharityList, setUserCharityList] = useState([]);

    // useEffect(()=>{
    //     setId(localStorage.getItem("userId"));

    // },[])
    // user
    useEffect(()=>{
        console.log("running");
        // const userId = localStorage.getItem("userId");
        axios.get("http://localhost:8000/api/user/" + props.userId)
            .then(response => {
                console.log(response);
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error);
            })

    },[id])
    // charities
    useEffect(()=>{
        // const userId = localStorage.getItem("userId");
        axios.get("http://localhost:8000/api/charities/user/" + props.userId)
        
        .then((response)=>{
            console.log(response.data);
            setUserCharityList(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return (
        <div className="container">
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <img src={logo} alt="bigdifferences logo" /> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/profile/${userId}">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/charity/add">Add Charity</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/charities">All Charities</a>
                                </li>
                                <li className="nav-item">
                                    <Logout />
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <hr />
                <h1 className="welcome">Welcome to Big-Differences Small-Charities</h1>
                <div className="header">
                    <p>The aim of this website is to provide help for the small charities around the world that need
                        even the smallest donation to make the biggest difference. We want to encourage people to feel
                        the power of helping a cause that truly needs it, even when they don't have a lot to spare. 
                    </p>
                    <p>
                        Discover, View, and Add Charities that need your help.
                    </p>
                    <p className="quote">"Each One of Us Can Make a Difference. Together We Make Change." -- Barbara Mikulski</p>
                </div>
                <div className="profile">
                    {/* Keep an eye out */}
                    <h2 className="all">Profile for {user.userName}</h2>
                    {/* <h2>Profile for {userName}</h2> */}
                    <br />
                    <h4>My Main Interests Are</h4>
                    <p>{user.interests}</p>
                    <div className="ProfileCharity">
                    <div>
                        {
                        userCharityList.map((charity, index)=>(
                            <div key={index}>
                                <h3 className="display">{charity.charityName}</h3>
                                <h4><a href={charity.charityWebsite}>{charity.charityWebsite}</a></h4>
                            </div>
                            ))
                        }
                        </div>
                        <a href="/charity/add">Add a Charity</a>

                    </div>
                    <br />

                </div>

            </div>

        </div>
    )
}
export default Profile;