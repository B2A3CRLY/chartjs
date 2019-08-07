import React from 'react';
import './card.css';
const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, a ex! Harum molestiae in saepe sint optio perferendis maxime recusandae perspiciatis, rem doloribus qui minus necessitatibus repudiandae, rerum neque commodi.
                </p>
                <a href="/" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>
    )
}
export default Card;