import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/VolunteerBoxes.css";
import "./../css/VolunteerList.css";
import House from "../components/VolunteerBoxes";
import Volunteer from "./Volunteer.jsx";
import AddVolunteer from "./AddVolunteer.jsx";

const VolunteerList = (props) => {
    const [volunteers, setVolunteers] = useState([]);
    const [showAddVolunteerDialog, setShowAddVolunteerDialog] = useState(false);

const openAddDialog = () => {
    setShowAddVolunteerDialog(true);
}

const closeAddDialog = () => {
    console.log("I'm in the close method")
    setShowAddVolunteerDialog(false);
}

const updateVolunteer = (volunteer) => {
    setVolunteers((volunteers) => [...volunteers, volunteer]);
};

    //after page has loaded
    useEffect(()=>{
        const loadVolunteers = async() => {
            const response = await axios.get("https://foreigncollective-server.onrender.com/api/volunteers");
            // const response = await axios.get("http://localhost:3001/api/volunteers"); 
            // debug: inspect shape coming back from API
            // console.log('volunteers response', response.data);
            const data = Array.isArray(response.data) ? response.data : [];
            const max = typeof props.num === 'number' ? props.num : data.length;
            setVolunteers(data.slice(0, max));
        };

        loadVolunteers();
    },[]);

    return (
        <>

                        <div className="add-volunteer-wrap">
                            <button id="add-volunteer" onClick={openAddDialog}>+</button>
                            <button id="add-volunteer-label" onClick={openAddDialog}>Add volunteer</button>
                        </div>

            {showAddVolunteerDialog?(<AddVolunteer
                closeAddDialog={closeAddDialog}
                updateVolunteer={updateVolunteer}
            />):("")}

        <div id="volunteer-list" className="volunteer-grid">
            {volunteers.map((volunteer)=>(
                <Volunteer key={volunteer.id} 
                        id={volunteer.id}
                        image={volunteer.image} 
                        title={volunteer.title}
                        description={volunteer.description}
                        link={volunteer.link}
                         />
            ))}
        </div>
     </>
    )
};

export default VolunteerList;