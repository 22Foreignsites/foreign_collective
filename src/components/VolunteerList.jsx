import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import House from "../components/House";

const VolunteerList = (props) => {
    const [volunteers, setVolunteers] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadVolunteers = async() => {
            const response = await axios.get("https://foreigncollective-server.onrender.com/api/volunteers");
            setVolunteers(response.data.splice(0,props.num));
        };

        loadVolunteers();
    },[]);

    return (
        <div id="volunteer-list" className="columns">
            {volunteers.map((volunteer)=>(
                <Volunteer key={volunteer._id} 
                        id={volunteer._id}
                        image={volunteer.image} 
                        title={volunteer.title}
                        description={volunteer.description}
                        link={volunteer.link}
                         />
            ))}
        </div>
    )
};