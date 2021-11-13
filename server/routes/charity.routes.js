const CharityController = require("../controllers/charity.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/charities", CharityController.getAllCharities);
    app.post("/api/charities", authenticate, CharityController.createCharity);
    app.get("/api/charities/:_id", CharityController.getOneCharity);
    app.get("/api/charities/user/:id", CharityController.getAllCharitiesByUser);
    app.put("/api/charities/edit/:_id", CharityController.updateCharity);
    app.delete("/api/charities/:_id", CharityController.deleteCharity)
}