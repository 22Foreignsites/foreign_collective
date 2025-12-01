import React, {useState} from "react";

const VolunteerEditDialog = (props) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("http://localhost:3001/images/" + props.main_image);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));

    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("...sending");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`http://localhost:3001/api/volunteers/${props._id}`,{
            method: "PUT",
            body:formData
        });

        if(response.status === 200){
            setResult("Volunteer updated successfully!");
            event.target.reset();
            props.closeEditDialog();
            props.updateVolunteer(await response.json());
        }else{
            setResult("Error editing volunteer");
        }
    };

    return(
        <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
                <label htmlFor="title"> Volunteer Title: </label>
                <input type = "text" id= "title" name="title" defaultValue={props.title} required min = "0"/>
            </p>
            <p>
                <label htmlFor="description"> Volunteer Description: </label>
                <input type = "text" id="description" name="description" defaultValue={props.description} required min = "0"/>
            </p>
            <p>
                <label htmlFor ="link"> Volunteer Link: </label>
                <input type = "text" id = "link" name="link" defaultValue={props.link} required min = "0"/>
            </p>
            
            <section>
                <div>
                    <p id ="img-prev-section">
                        {prevSrc!=""?
                        (<img id ="img-prev" src={prevSrc}></img>):
                        ("")
                        }
                    </p>
                </div>
                <p id = "img-upload">
                    <label htmlFor="img">Upload Image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                </p>
            </section>

        <p>
            <button type="submit">Submit</button>
        </p>
        <p>{result}</p>
        </form>

    );
};

export default VolunteerEditDialog;