import React, { useState, useEffect, useContext } from 'react'
import Backend from '../services/Backend'
import { useNavigate, Link, useParams } from 'react-router-dom'
import AuthContext from "../services/AuthContext";
import "../css/Lessons.css"
import { ReactSession } from 'react-client-session';

function Lessons() {
    const [Lessons, setLessons] = useState([])
    const [dates, setDates] = useState('')
    const [chosenDate, setChosenDate] = useState(null)
    const [confirmed, setConfirmed] = useState(false)
    const tutorialId = useParams().id
    const url = window.location.pathname
    const navigate = useNavigate()
    const { loggedIn } = useContext(AuthContext);

    ReactSession.setStoreType("localStorage");
    const username = ReactSession.get("email");
    console.log(username)


    useEffect(() => {
        window.scrollTo(0, 0);
        retrieveLessons()
        Payed()
        // localStorage.clear();

    }, []);

    const [payed, handlePayed] = useState(false);
    const Payed = () => {
        console.log(payed)
        if (localStorage.getItem("Payed")) {
            handlePayed(localStorage.getItem("Payed"))
            console.log(payed)
        }
        else {
            handlePayed(false)
        }
    }

    const retrieveLessons = () => {
        Backend.getLessons(tutorialId)
            .then(response => {
                setLessons(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const confirmLesson = (id, e) => {
        if (dates && dates !== 0) {
            // setConfirmed(true)
            // document.getElementById("confirmButton").style.display = "none";
            // document.getElementById("done").style.display = "block";
            //SEND DATES AND LESSON_ID AND TUTORIAL_ID
            Backend.saveDateTime({ "dateTime": dates, "tutorialId": tutorialId }, id)
                .then(response => {
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }

        else {
            //choose a date
            alert("choose a date")
        }
    }

    const enrollPay = () => {

        const enroll = async (e) => {
            e.preventDefault()
            localStorage.setItem("url", url)
            console.log(url)
            navigate('/payment')

        }

        return <div className={`enroll-btn ${loggedIn && 'enroll-btn-on'}`}><button className='card-button-lesson' onClick={enroll}>Enroll</button></div>
    }
    const displayLessons = () => {
        return (
            Lessons.map((Lesson) => {

                return (
                    <>
                        <div className={`card-lessons ${payed && 'card-lessons-activated'}`}>

                            <img src={Lesson.tutorial.photo} alt="lesson" className="lesson-img"></img>

                            <div className="lesson-info">
                                <h3 className="lesson-title">{Lesson.title}</h3>
                                <p className='lesson-description'>{Lesson.description}</p>
                                {/* {console.log(Lesson.tutorial.dateTime.map((datet) => {datet.DateTime}))} */}
                            </div>
                            <div className='starting'>
                                <div className="dayData">
                                    {console.log(dates)}
                                    <select className='date-button-lesson' onChange={(e) => setDates(e.target.value)}> <option key={-1} value={0}>Choose DateTime</option>
                                        {Lesson.tutorial.dateTime.map((dayData, i) => { return dayData.available === true ? <option key={i} value={dayData.DateTime}> {dayData.DateTime}</option> : '' })}
                                    </select>
                                </div>
                                <div className='lesson-start'>
                                    {/* {confirmed?<div>Done</div>:<button className='card-button-lesson' onClick={() => confirmLesson(Lesson._id)}>Confirm</button>
                                    } */}
                                    <button className='card-button-lesson' onClick={() => confirmLesson(Lesson._id)}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
    return (
        <div>
            <div className='subCategory-banner'><img className='subCategory-banner-image' src={window.location.origin + '/music-hero-01.png'}></img>
                <div className="subCategory-banner--fadeBottom"></div>
            </div >
            <h1 className='get-started'>Let's Get Started!</h1>
            <h2 className='new-skill'>Learn a new skill online with a private tutor</h2>
            <h3 className='levels'>Beginner, Intermediate & Advanced</h3>
            <div className='enrollment'>{enrollPay()} <div className={`sign-in-request ${loggedIn && 'sign-in-done'}`}>Sign In First</div></div>

            <div class="">
                {displayLessons()}
            </div>
        </div>
    )
}

export default Lessons