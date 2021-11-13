import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import logo from "../components/logo.png";
import DeleteCharity from "../components/DeleteCharity"
import Logout from '../components/Logout';

const DisplayCharities = (props) => {
    const [ user, setUser ] = useState({});
    const [charityList, setCharityList] = useState([]);
    const [oneCharity, setOneCharity] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:8000/api/charities")
        .then((response)=>{
            setCharityList(response.data);
            console.log(response.data);
        })
        .catch((error) => console.log(error))
    }, []);
    return(
        <div className="container">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#"><img src={logo} /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/charity/add">Add Charity</a>
                                </li>
                                <li className="nav-item active">
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
            <div className="header">
                <h1 className="welcome">All Small Charities Added So Far</h1>

                    <p>The aim of this website is to provide help for the small charities around the world that need
                        even the smallest donation to make the biggest difference. We want to encourage people to feel
                        the power of helping a cause that truly needs it, even when they don't have a lot to spare. 
                    </p>
                    <p>
                        Discover, View, and Add Charities that need your help.
                    </p>
                    <p className="quote">“To make a difference in someone’s life, you don’t have to be 
                    brilliant, rich, beautiful, or perfect. You just have to care enough and be there.”
                        ― Mandy Hale</p>

                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        {/* <button href="/charity/add" className="btn btn-primary">Add Charity</button> */}
                        <a href="/charity/add">Add a Charity</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container" id="charityDisplay">
                {
                    charityList.map((charity, index) => (
                        <div class="col">
                            <div className="row" key={index}>
                                <div >
                                    <h2 className="display">Charity Name</h2>
                                    <h3 className="all">{charity.charityName}</h3>
                                </div>
                                <div className="row">
                                    <h2 className="display">Charity Website</h2>
                                    <h3><a href={charity.charityWebsite}>{charity.charityWebsite}</a></h3>
                                </div>
                                <div className="row">
                                    <h2 className="display">Recommended Donation</h2>
                                    <h3>${charity.charityDonation}</h3>
                                </div>
                                <div className="row">
                                    <h2 className="display">Charity Type</h2>
                                    <h3 style={{color: "blue"}}>{charity.charityType}</h3>
                                </div>
                                <div className="row">
                                    
                                    {
                                        oneCharity.favorite === true?
                                        <div>
                                            <h3 className="displayfavorite">Favorite</h3>
                                        </div>
                                        : null
                                    }


                                </div>
                                {
                                    charity.createdBy ?
                                    <div>
                                        <span><Link to={`/profile/${charity.createdBy._id}`}> 

                                            <p>Added By: {charity.createdBy.userName}</p></Link></span>
                                    </div>
                                    : null
                                }

                            </div>
                            <div>
                                {/* <UpdateCharity  id={charity._id}/> */}
                                <button className="btn btn-link"><Link to={`/charity/update/${charity._id}`}>Update</Link></button>

                                <DeleteCharity charityList={charityList} setCharityList={setCharityList} id={charity._id} /> 
                                
                            </div>
                            <br />
                            {/* {
                                charity.createdBy === charity.createdBy.UserName ?
                                <div>

                                <DeleteCharity charityList={charityList} setCharityList={setCharityList} id={charity._id} /> 
                                </div>
                                : null
                            } */}

                            <hr />
                        </div>

                    ))

                }

            </div>
        </div>
    )
}
export default DisplayCharities;