import React from 'react';

const CharityForm = (props) => {
    const {submitHandler, buttonText, charity, setCharity, errors} = props;

    const newCharityHandler = (event) => {
        let newStateObject = {...charity};
        if(event.target.type === "checkbox"){
            console.log(event.target.name, event.target.checked);
            newStateObject[event.target.name] = event.target.checked;
        } else {
            console.log(event.target.name, event.target.value);
            newStateObject[event.target.name] = event.target.value;
        }
        console.log(event.target);
        setCharity(newStateObject);
    }
    return(
        <div>
            <form onSubmit={submitHandler} className="col">
                {/* charityName */}
                <div className="form-group">
                    <label>Charity Name: </label>
                    <input className="form-control-sm" onChange={newCharityHandler} name="charityName" value={charity.charityName} type="text" />
                    {
                        errors.charityName ?
                        <span style={{color:"red"}}>{errors.charityName.message}</span>
                        : null
                    }
                </div>
                <br />
                {/* charityWebsite*/}
                <div className="form-group">
                    <label>Charity Website: </label>
                    <input className="form-control-sm" onChange={newCharityHandler} name="charityWebsite" value={charity.charityWebsite} type="text" />
                    {
                        errors.charityWebsite ?
                        <span style={{color:"red"}}>{errors.charityWebsite.message}</span>
                        : null
                    }
                </div>
                <br />
                {/* charityDonation*/}
                <div className="form-group">
                    <label>Suggested Charity Donation: </label>
                    <input className="form-control-sm" onChange={newCharityHandler} name="charityDonation" value={charity.charityDonation} type="number" />
                    {
                        errors.charityDonation ?
                        <span style={{color:"red"}}>{errors.charityDonation.message}</span>
                        : null
                    }
                </div>
                <br />
                {/* charityType*/}
                <div className="form-group">
                    <label>Main Focus of Charity: </label>
                    <select className="form-control-sm" onChange={newCharityHandler} name="charityType" value={charity.charityType}>
                            <option value="none" defaultValue hidden >Select Charity Focus</option>
                            <option value="LGBTQ+">LGBTQ+</option>
                            <option value="Animals">Animals</option>
                            <option value="Environment">Environment</option>
                            <option value="WomensIssues">Womens Issues</option>
                            <option value="Poverty">Poverty</option>
                            <option value="Veterans">Veterans</option>
                            <option value="Arts and Culture">Arts and Culture</option>
                            <option value="Education">Education</option>
                            <option value="Health">Health</option>
                            <option value="Other">Other</option>
                    </select>
                    {
                        errors.charityType ?
                        <span style={{color:"red"}}>{errors.charityType.message}</span>
                        : null
                    }
                </div>
                <br />
                {/* favorite */}
                <div className="form-check">
                    <label >Is this Charity Your One of Your Personal Favorites?</label>
                    <input onChange={newCharityHandler} name="favorite" checked={charity.favorite} type="checkbox" />
                </div>
                <div>
                <br />
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </form>
        </div>
    )
}
export default CharityForm;