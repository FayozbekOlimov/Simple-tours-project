import React from 'react'
import Tour from './Tour'

const Tours = ({ data, removeTour, getData }) => {
    return (
        <main>
            <h1 className="title">
                {data.length ? 'Our Tours' : 'No Tours Left'}
            </h1>
            <span className="underline"></span>
            <div className="tours">
                { 
                    data.length
                        ? data.map((tour, index) => <Tour key={index} {...tour} removeTour={removeTour} />) 
                        : <button className="refresh-btn" onClick={() => getData()}>Refresh</button>    
                    }
            </div>
        </main>
    )
}

export default Tours
