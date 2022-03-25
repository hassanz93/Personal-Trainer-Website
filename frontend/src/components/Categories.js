import React, { useState, useEffect } from 'react'
import Backend from '../services/Backend'
import { Link } from 'react-router-dom'
import "../css/Categories.css"


function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        retrieveCategories()
    }, []);

    const retrieveCategories = () => {
        Backend.getCategories()
            .then(response => {
                setCategories(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    const displayCategories = () => {
        return (
            categories.map((Category) => {

                return (
                    <div class="card">
                        <img src={Category.photo} alt="category" className="category-image"></img>
                        <div className="category-name"><h3 className="category-title">{Category.name}</h3></div>
                        <p className='category-description'>{Category.description}</p>
                        <Link className='link-categories' to={`SubCategories/${Category._id}`}>
                            <button className='card-button'>See More</button>
                        </Link>

                    </div >
                )
            })
        )
    }
    return (
        <div className="Categories-banner">
            <h1 className='get-started'>Let's Get Started!</h1>
            <h2 className='new-skill'>Learn a new skill online with a private tutor</h2>
            <h3 className='levels'>Beginner, Intermediate & Advanced</h3>
            <div class="flex-container wrap">
                {displayCategories()}
            </div>
        </div>
    )
}

export default Categories