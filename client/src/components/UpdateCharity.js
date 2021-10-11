// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import CharityForm from "./CharityForm";
// import {Link, navigate} from '@reach/router';

// const UpdateCharity = (props) => {
//     const [errors, setErrors] = useState({});
//     const [updatedCharity, setUpdatedCharity] = useState({})

//     useEffect(()=>{
//         axios.get(`http://localhost:8000/api/charities/${props.id}`)
//         .then((response) =>{
//             console.log(response.data);
//             setUpdatedCharity(response.data);
//         })
//         .catch((error) =>console.log(error))
//     }, [id])
    
//     const updateCharityHandler = (event) =>{
//         event.preventDefault();
//         axios.put(`http://localhost:8000/api/charities/${props.id}`, updatedCharity)
//         .then((response) =>{
//             console.log(response.data);
//             navigate("/charities")
//         })
//         .catch((error)=>{
//             console.log(error);
//             console.log(error.response.data.errors);
//             setErrors(error.response.data.errors);
//         })
//     }
//     return(
//         <div>
//             <Link to={"/charites"}>Back to All Charities</Link>
//             <div>
//                 <h2>Edit {updatedCharity.charityName} </h2>
//                 <CharityForm charity={updatedCharity} setCharity={setUpdatedCharity} submitHandler={updateCharityHandler} errors={errors} buttonText="Edit Charity" />
//             </div>
//         </div>
//     )
// }
// export default UpdateCharity;