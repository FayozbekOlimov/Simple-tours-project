import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour" id={id}>
            <img className="image" src={image} alt="tour-img" />
            <div className="tour-content">
                <div className="tour-heading">
                    <h3 className="name">{name}</h3>
                    <p className="price">$ {price}</p>
                </div>
                <p className="info">
                    {readMore
                        ? info
                        : info.substring(0, 200) + '...'}
                    <button className="readmore-btn" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read more'}
                    </button>
                </p>
                <button className="btn" onClick={() => removeTour(id)}>Not Interested</button>
            </div>
        </article>
    )
}

export default Tour
