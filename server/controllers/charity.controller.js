const Charity = require("../models/charity.model");
const jwt = require("jsonwebtoken");

module.exports = {
    //read all charities
    getAllCharities: (request, response) =>{

        Charity.find({})
            .populate("createdBy", "userName")
            .then((allCharities) => response.json(allCharities))
            .catch((error) => {console.log("find all charities went wrong"); response.status(400).json(error)})
    },
    //all by user
    getAllCharitiesByUser: (request, response)=>{
        Charity.find({createdBy: request.params.id})
        .then((allUserCharities)=>{
            console.log(allUserCharities);
            response.json(allUserCharities);
        })
        .catch((error)=>{
            console.log(error);
            response.status(400).json(error);
        })
    },
    //read one charity
    getOneCharity: (request, response) => {
        Charity.findOne({_id: request.params._id})
            .populate("createdBy", "userName")
            .then((oneCharity) => response.json(oneCharity))
            .catch((error) => {console.log("find one charity went wrong"); response.status(400).json(error)})
    },

    //create one charity
    createCharity: (request, response) => {
        console.log(request.body);
        const decodedJwt = jwt.decode(request.cookies.userToken, {complete: true});
        const userId = decodedJwt.payload.user_id;
        // create normal charity object from what was passed in
        //now add new createdBy key in the object and give it the value of this Users Id from encoded cookie
        const charity = new Charity(request.body);
        charity.createdBy = userId;


        Charity.create(charity) //removed response.json put in charity 
            .then((newCharity) => response.json(newCharity))
            .catch((error) => 
            {console.log("Creating Charity went wrong"); response.status(400).json(error)})
    },

    //update one Charity
    updateCharity: (request, response) => {
        Charity.findOneAndUpdate(
            {_id: request.params._id},
            request.body,
            {new: true, runValidators: true}
        )
            .then((updatedCharity)=> response.json(updatedCharity))
            .catch((error) => {console.log("Updating Charity went wrong"); response.status(400).json(error)})
    },

    //delete one charity
    deleteCharity: (request, response) => {
        Charity.deleteOne({_id: request.params._id})
            .then((deletedCharity) => response.json(deletedCharity))
            .catch((error) => {console.log("deleting Charity went wrong"); response.status(400).json(error)})
    }
}