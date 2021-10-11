import React, {useState} from 'react';
import axios from 'axios';
import CharityForm from "../components/CharityForm";
import {Link, navigate} from "@reach/router";
import logo from "../components/logo.png";

const AddCharity = (props) => {
    const [errors, setErrors] = useState({});
    const [newCharity, setNewCharity] = useState({
        charityName: "",
        charityType: "",
        charityWebsite: "",
        charityDonation: "",
        favorite: false,
    });
    const [favoriteCharity, setFavoriteCharity] = useState({
        charityName: "",
        charityType: "",
        charityWebsite: "",
        charityDonation: "",
        favorite: false,
    })

    const newCharityHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/charities", newCharity,
        {withCredentials: true})
        // axios.post(`http://localhost:8000/api/profile/${userId}`, newCharity,
        // {withCredentials: true})
        .then((response) => {
            console.log(response);
            console.log(response.data);
            navigate("/charities");
            // this may need to change ^
        })
        .catch((error)=>{
            console.log(error);
            console.log(error.response.data.errors);
            if(error.response.status == 401){
                navigate("/addcharity");
            }
            if(error.response.data.errors){
                setErrors(error.response.data.errors);
            }
        })
    }
    // const newFavoriteHandler = (event) => {
    //     event.preventDefault();
    //     axios.post("http://localhost:8000/api/profile/${UserId}", favoriteCharity,
    //     {withCredentials: true})

    //     .then((response) => {
    //         console.log(response);
    //         console.log(response.data);
    //         navigate("/profile/${userId}");
    //     })
    //     .catch((error)=>{
    //         console.log(error.response.data.errors);
    //         if(error.response.status == 401){
    //             navigate("/addcharity");
    //         }
    //         if(error.response.data.errors){
    //             setErrors(error.response.data.errors);
    //         }
    //     })
    // }
    return (
        <div className="container">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <img src={logo} alt="bigdifferences logo" /> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
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
                                    <a className="nav-link" href="/" id="logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <hr />
            <h1>Add Charity</h1>
            <div className="header">
                <p>The aim of this website is to provide help for the small charities around the world that need
                    even the smallest donation to make the biggest difference. We want to encourage people to feel
                    the power of helping a cause that truly needs it, even when they don't have a lot to spare. 
                </p>
                <p>Discover, View, and Add Charities that need your help.</p>
                <p className="quote">“Every action in our lives touches on some chord that will vibrate in eternity.”
                    ― Edwin Hubbel Chapin</p>
            </div>
            <hr />
            <CharityForm submitHandler={newCharityHandler} buttonText="Add Charity" 
            charity={newCharity} setCharity={setNewCharity} errors={errors} />

        </div>
    )
}
export default AddCharity;