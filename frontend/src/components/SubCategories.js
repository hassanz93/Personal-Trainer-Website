import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { Link, useParams } from 'react-router-dom'
import "../css/SubCategories.css"

function SubCategories() {
    const [SubCategories, setSubCategories] = useState([])
    const categoryId = useParams().id

    useEffect(() => {
        window.scrollTo(0, 0);
        retrieveSubCategories()
    }, []);

    const retrieveSubCategories = () => {
        Backend.getSubCategories(categoryId)
            .then(response => {
                setSubCategories(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    const displaySubCategories = () => {
        return (
            SubCategories.map((SubCategory) => {

                return (
                    <>
                        <div class="card">
                            <Link className='link-categories' to={`tutorials/${SubCategory._id}`}>
                                <img src={SubCategory.photo} alt="subCategory" className="subCategory-image"></img>
                                {/* <div className="subCategory-name"><h3 className="category-title"></h3></div> */}
                                <button className='card-button-sub'>{SubCategory.name}</button>
                            </Link>
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
            <div class="flex-container wrap">
                {displaySubCategories()}
            </div>
        </div>
    )
}

export default SubCategories