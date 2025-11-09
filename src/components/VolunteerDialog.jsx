import "./../css/Dialog.css";

const HouseDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeHouseDialog}
                    >
                        &times;
                    </span>
                    <div className="columns">
                        <img src={"https://foreigncollective-server.onrender.com/images/"+props.image} alt="volunteer" />
                        <div id="dialog-content">
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                            <p>Link: <a href={props.link}>{props.link}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDialog;