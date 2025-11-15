import "../css/Dialog.css";
import React, {useState} from "react";

const AddVolunteerPlan = (props) => {
    const [result,setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
};

const addToServer = async (event) => {
    event.preventDefault();
    setResult("Uploading...");

    const formData = new FormData(event.target);
    console.log(...formData);

    // const response = await fetch("http://localhost:3001/api/volunteers", {
    const response = await fetch("https://foreigncollective-server.onrender.com/api/volunteers", {
        method: "POST",
        body: formData
    });

    if (response.status == 200) {
        setResult("Volunteer added successfully!");
        event.target.reset();
        props.closeAddDialog();
        props.updateVolunteer(await response.json());

}else{
    setResult("Error adding Volunteers");
}

};

return(
    <div id = "add-dialog" className = "w3-modal">
        <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Volunteery</h3>

                    <p>
                        <label htmlFor="title"> Volunteer Title: </label>
                        <input type = "text" id= "title" name="title" required min = "0"/>
                    </p>

                    <p>
                        <label htmlFor="description"> Volunteer Description: </label>
                        <input type = "text" id="description" name="description" required min = "0"/>
                    </p>

                    <p>
                        <label htmlFor ="link"> Volunteer Link: </label>
                        <input type = "text" id = "link" name="link" required min = "0"/>
                    </p>

                    <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddVolunteerPlan;
