import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/VolunteerBoxes.css";
import House from "../components/VolunteerBoxes";
import Volunteer from "./Volunteer.jsx";

const VolunteerList = (props) => {
    const [volunteers, setVolunteers] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadVolunteers = async() => {
            const response = await axios.get("https://foreigncollective-server.onrender.com/api/volunteers");
            // debug: inspect shape coming back from API
            // console.log('volunteers response', response.data);
            const data = Array.isArray(response.data) ? response.data : [];
            const max = typeof props.num === 'number' ? props.num : data.length;
            setVolunteers(data.slice(0, max));
        };

        loadVolunteers();
    },[]);

    return (
        <div id="volunteer-list" className="columns">
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
    )
};

export default VolunteerList;