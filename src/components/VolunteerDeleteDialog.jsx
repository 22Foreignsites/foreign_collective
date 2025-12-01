import React, {useState} from "react";

const VolunteerDeleteDialog = (props) => {
    const [result, setResult] = useState("");
    
    const deleteVolunteer = async () => {
        const response = await fetch (`http://localhost:3001/api/volunteers/${props.id}`, {
        method: "DELETE"
    });

    if(response.status === 200){
        setResult("Volunteer event successfully deleted!");
        props.closeDeleteDialog();
        props.hideVolunteer();
    }else{
        setResult("Sorry, we could not delete this volunteer event");
    }
};

return (
    <div id = "delete-content">
        <h3> Are you sure you want to delete the {props.name}</h3>
        <section>
            <button onClick = {props.closeDeleteDialog}>No</button>
            <button onClick={deleteVolunteer}>Yes</button>
        </section>
        <span>{result}</span>
    </div>
);
};

export default VolunteerDeleteDialog;