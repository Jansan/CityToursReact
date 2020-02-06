import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

class TourList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tours: tourData
        };
    }

    render() {
        const { tours } = this.state;

        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} />
                })}
            </section>
        )
    }
}

export default TourList;
