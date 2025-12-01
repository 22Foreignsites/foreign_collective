import "../css/VolunteerBoxes.css";
import {useState} from "react";
import VolunteerDialog from "./VolunteerDialog.jsx";

const Volunteer = (props) => {
    const [volunteer, setVolunteer] = useState(props);
    const [showDialog, setShowDialog] = useState(false);
    const [showVolunteer, setShowVolunteer] = useState(true);

    const showVolunteerDetails = () => {
        setShowDialog(true);
    }

    const closeVolunteerDetails = () => {
        setShowDialog(false);
    }

    const updateVolunteer = (volunteer) => {
        setVolunteer(volunteer);
    };

    const hideVolunteer = () => {
        setShowVolunteer(false);
    };

    return (
        <>
            {showDialog?(
                <VolunteerDialog closeVolunteerDialog={closeVolunteerDetails}
                    id={volunteer.id}
                    title={volunteer.title}
                    description={volunteer.description}
                    image={volunteer.image}
                    link={volunteer.link}
                    cta={volunteer.cta}
                    updateVolunteer={updateVolunteer} 
                    hideVolunteer={hideVolunteer}
                />
            ):("")}

            {showVolunteer?(
            <section className="volunteer" onClick={showVolunteerDetails}>
                 <img src={`https://foreigncollective-server.onrender.com/images/${volunteer.image}`} alt="volunteer" />
                {/* <img src={`http://localhost:3001/images/${volunteer.image}`} alt={volunteer.title || "volunteer"} /> */}
                {/* <img src={props.image} alt={props.title || "volunteer"} /> */}
                <div className="volunteer-description">
                    <h1>{volunteer.title}</h1>
                    <p>{volunteer.description}</p>
                </div>
            </section>
            ):("")}
        </>
    );
};

export default Volunteer;