import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import CharityForm from '../components/CharityForm'
import Logout from './Logout';
import logo from "../components/logo.png";

const UpdateCharity = (props) =>{
    const [errors, setErrors] = useState({});
    const [updatedCharity, setUpdatedCharity] = useState({
        charityName: "",
        charityType: "",
        charityWebsite: "",
        charityDonation: "",
        favorite: false,
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/charities/${props.id}`)
        .then((response)=> {
            console.log(response.data);
            setUpdatedCharity(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    const updateCharityHandler = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/charities/edit/${props.id}`,
        updatedCharity
        )
        .then((response)=>{
            console.log(response);
            console.log(response.data);
            navigate("/charities")
        })
        .catch((error)=>{
            console.log(error);
            console.log(error.response.data);
            setErrors(error.response.data.errors);
        })
    }
    return(
        <div>
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
                <h1 className="welcome">Update The Charity</h1>
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
                <div className="form">
                    <CharityForm submitHandler={updateCharityHandler} buttonText="Update Charity" 
                    charity={updatedCharity} setCharity={setUpdatedCharity} errors={errors} />
                </div>

            </div>
            {/* <p>Things Change, update if you've noticed an error in the information provided</p> */}
        </div>
    )
}
export default UpdateCharity;