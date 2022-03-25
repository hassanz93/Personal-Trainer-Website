import React, { useEffect, useState } from "react";
import '../css/ourtrainers.css';
import Backend from "../services/Backend";


function Ourtrainers() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        retrieveTrainers()
    }, []);

    const retrieveTrainers = () => {
        Backend.getTrainers()
            .then((response) => {
                setTrainers(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            });
    }

    const displayData = () => {
        return (
            trainers.map((user) => {
                return (
                    <div className="ourtrainer-eachtrainer"  >
                        <img className="ourtrainer--picture" src={user.userId.photo} alt={"photo not available"} />
                        <p className="ourtrainer--trainername"> {user.userId.fname + " " + user.userId.lname} </p>
                        <p className="ourtrainer--trainerspeciality"> {user.certificate} </p>
                    </div>

                )
            })
        )
    }
    return (<div className="ourtrainer-container">
        <h1 className="ourtrainer-title"> Our Trainers</h1>
        <div className="ourtrainer-main">{displayData()}</div>
    </div>);
}
export default Ourtrainers