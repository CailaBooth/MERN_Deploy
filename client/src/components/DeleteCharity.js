import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteCharity = (props) => {
    const {id, charityList, setCharityList} = props;

    const deleteFilter = (id) => {
        console.log("Delete filter working??");
        let newCharityList = charityList.filter((charity) => charity._id !== id);
        setCharityList(newCharityList);
    }

    const deleteHandler = (event) => {
        axios.delete(`http://localhost:8000/api/charities/${id}`)
            .then((response)=>{
                if(charityList){
                    deleteFilter(id);
                } else {
                    navigate("/charities");
                }
            })
            .catch((error)=>{console.log(error)})
    }
    return(
        <div>
            <button className="btn btn-danger" onClick={deleteHandler}>Remove Charity</button>
        </div>
    )
}
export default DeleteCharity;