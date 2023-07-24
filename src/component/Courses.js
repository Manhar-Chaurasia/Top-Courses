import React from 'react';
import Menu from './MenuApi';

const Courses = () => {
    return (
        <>
            <div className="header">
                <h2>Top 5 Elite Courses on Udemy</h2>
            </div>
            <div className="cards">
                {Menu.map((currElem) => {
                    const { id, image, cName, lin, cDescription } = currElem;
                    return (
                        <div className="card-container" key={id}>
                            <img src={image} alt="html-image" />
                            <h2>{cName}</h2>
                            <p className="card-desc">{cDescription}</p>
                            <button className="c-enroll"><a href={lin}>Enroll Now</a></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Courses;