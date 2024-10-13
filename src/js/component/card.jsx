import React from "react"
import { Link } from "react-router-dom"


const Card = ({ data }) => {
    return (
        <div className="my-card card me-2">
            <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.properties.name}</h5>
                <div className="properties-container">
                    <p className="card-text mb-0"><strong>Gender</strong> {data.properties.gender}</p>
                    <p className="card-text mb-0"><strong>Hair-color</strong> {data.properties.hair_color}</p>
                    <p className="card-text mb-3"><strong>Eye-color</strong> {data.properties.eye_color}</p>
                </div>
                <div className="buttons-custom-card">
                    <div className="card-butons d-flex justify-content-between  ">
                        <Link to="/character" className="btn btn-outline-primary">Learn more!</Link>
                        <button type="button" className="btn btn-outline-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;