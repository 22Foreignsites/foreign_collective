import "../css/VolunteerBoxes.css";
import {useState} from "react";
import VolunteerDialog from "./VolunteerDialog.jsx";

const Volunteer = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showVolunteerDetails = () => {
        setShowDialog(true);
    }

    const closeVolunteerDetails = () => {
        setShowDialog(false);
    }
    return (
        <>
            {showDialog?(
                <VolunteerDialog closeVolunteerDialog={closeVolunteerDetails}
                    id={props.id}
                    title={props.title}
                    description={props.description}
                    image={props.image}
                    link={props.link}
                    cta={props.cta} />
            ):("")}
            <section className="volunteer" onClick={showVolunteerDetails}>
                 <img src={"https://foreigncollective-server.onrender.com/images/"+props.main_image} alt="volunteer" />
                {/* <img src={props.image} alt={props.title || "volunteer"} /> */}
                <div className="volunteer-description">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </section>
        </>
    );
};

export default Volunteer;