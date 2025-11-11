import "./../css/Dialog.css";

const VolunteerDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeVolunteerDialog}
                    >
                        &times;
                    </span>
                    <div className="columns">
                        <img className="dialog-image" src={"https://foreigncollective-server.onrender.com/images/"+props.image} alt={props.title || "volunteer"} />
                        <div id="dialog-content">
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                            {props.link && <p>Link: <a href={props.link}>{props.link}</a></p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDialog;