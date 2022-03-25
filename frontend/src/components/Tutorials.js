import React, { useEffect, useState } from "react";
import '../css/Tutorials.css';
import Backend from "../services/Backend";
import { Link, useParams } from 'react-router-dom'


function Tutorials() {
    const [tutorials, setTutorials] = useState([]);
    const subCategories = useParams().id

    useEffect(() => {
        window.scrollTo(0, 0);
        retrieveTutorials()
    }, []);

    const retrieveTutorials = () => {
        Backend.getTutorial(subCategories)
            .then((response) => {
                setTutorials(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            });
    }
    const displayTutorials = () => {
        return (
            tutorials.map((Tutorial) => {
                return (
                    <>
                        <div class="card">
                            {console.log(Tutorial)}
                            <img src={Tutorial.photo} alt="category" className="tutorial-image"></img>
                            {/* <img src={Tutorial.trainerId.photo} alt="category" className="tutorial-imagesmall"></img> */}

                            <div className="tutorial-titles">
                                <div className="tutorial-name"><h3 className="tutorial-title">{Tutorial.subCategories.name}</h3></div>
                                <div className="tutorial-price"><h3 className="tutorial-title">{Tutorial.pricePerLesson}/hr</h3></div>
                            </div>
                            <p className='tutorial-maintitle'>{Tutorial.title}</p>
                            <p className='tutorial-description'>{Tutorial.description}</p>
                            <Link className='link-categories' to={`lessons/${Tutorial._id}`}>
                                <button className='tutorial-button'>More</button>
                            </Link>

                        </div>
                    </>
                )
            })
        )
    }
    return (
        <div>
            <div className='tutorial-banner'> <img className='tutorial-banner-image' src={window.location.origin + '/music-hero-01.png'}></img>
            <div className="tutorial-banner--fadeBottom"></div>
            </div>
            <h1 className='get-started'>Check All Tutorials And Enroll</h1>
            <h2 className='new-skill'>__________Latest Tutorials__________</h2>
            <div class="flex-container wrap">
                {displayTutorials()}
            </div>
        </div>
    )
}
export default Tutorials