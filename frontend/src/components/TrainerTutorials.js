
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "../axios";

function TrainerTutorials({Tutorial}) {
    const [date_Time, setDate_time ] = useState('')
    console.log("gvsajhhavsdjhvdasjhvdaj")
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
  return (
    <div class="card">
                           {console.log(Tutorial)}
                            <img src={Tutorial.photo} alt="category" className="tutorial-image"></img>
                            {/* <img src={Tutorial.trainerId.photo} alt="category" className="tutorial-imagesmall"></img> */}

                            <div className="tutorial-titles">
                                <div className="tutorial-name"><h3 className="tutorial-title">{Tutorial.subCategories.name}</h3></div>
                                <div className="tutorial-price"><h3 className="tutorial-title">{Tutorial.pricePerLesson}/hr</h3></div>
                            </div>
                            <p className='tutorial-maintitle'>{Tutorial.title}</p>
                            <div className="description-tuto">
                            <p className='tutorial-description'>{Tutorial.description}</p>
                            </div>
                            <div className="datetime-settings">
                            <ul className="all-the-datetimes">{Tutorial.dateTime.map((dayData, i) => {return dayData.available === true? <li key={i} value={dayData.DateTime}> {dayData.DateTime}</li> : '' })}</ul>
                            <br></br>
                            <ul className="all-the-datetimes"><span style={{}}>MY SCHEDULE</span> {Tutorial.dateTime.map((dayData, i) => {return dayData.available === false? <li key={i} value={dayData.DateTime}> {dayData.DateTime}</li> : '' })}</ul>
                            <br></br>
                            
                            <form className="add-new-datetime">
                            <input type="text" className="register-Input-phone  datetime-input" onChange={(e) => setDate_time(e.target.value)} placeholder='Add a new DateTime' value={date_Time}/>
                            <button className='add-datetime' type='button' value="Submit" onClick={() => handleSubmit(Tutorial._id)}>Add DateTime</button>
                            </form>
                            </div>
                            <Link className='link-categories' to={`lessons/${Tutorial._id}`}>
                                <button className='tutorial-button'>More</button>
                            </Link>

                        </div>
  )
}

export default TrainerTutorials