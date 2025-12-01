import "./../css/Dialog.css";
import React, {useState} from "react";
import VolunteerDetailsDialog from "./VolunteerDetailsDialog";
import VolunteerEditDialog from "./VolunteerEditDialog";
import VolunteerDeleteDialog from "./VolunteerDeleteDialog";

const VolunteerDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

    return (
        <div id="volunteer-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeVolunteerDialog}
                    >
                        &times;
                    </span>
                    <div id = "volunteer-dialog-content">
                        {showContent === "details"?(
                            <VolunteerDetailsDialog
                                showEdit={showEdit}
                                showDelete={showDelete}
                                id={props.id}
                                title={props.title}
                                description={props.description}
                                link={props.link}
                                image={props.image}
                                main_image={props.image}
                            />
                        ) : showContent === "edit" ? (
                            <VolunteerEditDialog
                                id={props.id}
                                title={props.title}
                                description={props.description}
                                link={props.link}
                                image={props.image}
                                main_image={props.image}
                                closeEditDialog={props.closeVolunteerDialog}
                                updateVolunteer={props.updateVolunteer}
                            />
                        ) : (
                            <VolunteerDeleteDialog
                                id={props.id}
                                title={props.title}
                                closeDeleteDialog={props.closeVolunteerDialog}
                                deleteVolunteer={props.deleteVolunteer}
                                 hideVolunteer={props.hideVolunteer}
                            />
                        )}
                    </div>
                    {/* <div className="columns">
                        <img className="dialog-image" src={"https://foreigncollective-server.onrender.com/images/"+props.image} alt={props.title || "volunteer"} />
                        <div id="dialog-content">
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                            {props.link && <p>Link: <a href={props.link}>{props.link}</a></p>}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default VolunteerDialog;