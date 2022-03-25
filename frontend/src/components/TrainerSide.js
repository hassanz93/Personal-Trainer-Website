import React, { useEffect, useState } from "react";
import '../css/Tutorials.css';
import axios from "../axios";
import Backend from "../services/Backend";
import { Link, useParams } from 'react-router-dom'
import '../css/TrainerSide.css'
import TrainerTutorials from "./TrainerTutorials";


function TrainerSide() {
    const [tutorials, setTutorials] = useState([]);
    const subCategories = useParams().id
    const [date_Time, setDate_time ] = useState('')

    useEffect(() => {
        retrieveTutorials()
    }, []);


    const handleSubmit = (id) => {
        // e.preventDefault()

if(!date_Time){
    alert("Please add a DateTime")
}
else{
    const datetimeData = {
        DateTime: date_Time,
        available: true
    }

    console.log(datetimeData)

    axios
    .post(`http://localhost:5000/tutorials/addDateTime/${id}`, {'datetime' : datetimeData})
    .then((response) => {
      console.log(response.status)
    })
    .catch((error) => {
        console.log(error);
    });
}
}

const inputDateTime = (e) =>{
    setDate_time(e)
} 

    const retrieveTutorials = () => {
        Backend.getTrainerTutorials()
            .then((response) => {
                setTutorials(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            });
    }

    const displayTutorials = () => {
        return (
            tutorials.map((Tutorial) => (
               <TrainerTutorials Tutorial={Tutorial}/>
                
            ))
        )
    }
    return (
        <div>
            <div className='tutorial-banner'> <img className='tutorial-banner-image' src='../music hero-10.png'></img>
            <div className="tutorial-banner--fadeBottom"></div>
            </div>
            <h1 className='get-started'>My Tutorials</h1>
            <h2 className='new-skill'>__________Tutorials__________</h2>
            <div class="flex-container wrap">
                {displayTutorials()}
            </div>
        </div>
    )
}
export default TrainerSide