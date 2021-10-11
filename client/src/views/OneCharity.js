// import React, {useState, useEffect} from 'react';
// import {Link} from "@react/router";
// import axios from 'axios';


// const OneCharity = (props) => {
//     const {id} = props;
//     const [oneCharity, setOneCharity] = useState({});

//     useEffect(() =>{
//         axios.get(`http://localhost:8000/api/charities/${id}`)
//         .then((response) => {
//             console.log(response.data);
//             console.log(response);
//             setOneCharity(response.data);
//         })
//         .catch((error)=>{console.log(error)})
//     }, [id])
//     return (
//         <div className="container">

//             <div>
//                     <nav className="navbar navbar-expand-lg navbar-dark">
//                     <a className="navbar-brand" href="#"><img src={logo} /></a>
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         {/* <img src={logo} alt="bigdifferences logo" /> */}
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul class="navbar-nav">
//                                 <li className="nav-item active">
//                                     <a className="nav-link" href="/profile/${userId}">Profile</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/charity/add">Add Charity</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/charities">All Charities</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="/" id="logout">Logout</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//                 <hr />
//             <h1>{oneCharity.charityName}</h1>
//             <div className="header">
//                 <p>The aim of this website is to provide help for the small charities around the world that need
//                     even the smallest donation to make the biggest difference. We want to encourage people to feel
//                     the power of helping a cause that truly needs it, even when they don't have a lot to spare. 
//                 </p>
//                 <p>Discover, View, and Add Charities that need your help.</p>
//                 <p className="quote">“Every action in our lives touches on some chord that will vibrate in eternity.”
//                     ― Edwin Hubbel Chapin</p>
//             </div>
//             <hr />
//             <div></div>
//         </div>
//     )
// }