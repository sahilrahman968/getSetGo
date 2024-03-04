import React from 'react'
import styles from "./FlightCard.module.scss"
import Card from '../card'
import airline from "../../assets/images/flight.png"

const FlightCard = ({details}) => {
    return (
        <Card style={{ padding: "40px", margin: "40px" }}>
            <div className={styles.container}>
                <div className={styles.section_1}>
                    <div className={styles.airline_image}>
                        <img src={airline} alt="airline-image"/>
                    </div>
                    <div className={styles.airline_details}>
                        <div className={styles.airline_name}>{details?.airline}</div>
                        <div className={styles.flight_no}>{details?.flightNumber}</div>
                    </div>
                </div>
                <div className={styles.section_2}>
                    <span className={styles.time}>19:35</span>
                    <span className={styles.text}>{details?.origin}</span>
                </div>
                <div className={styles.section_3}>
                   <span className={styles.duration_value}>{details?.duration}</span>
                   <span className={styles.duration}>Duration</span>
                </div>
                <div className={styles.section_4}>
                    <span className={styles.time}>19:35</span>
                    <span className={styles.text}>{details?.destination}</span>
                </div>
                <div className={styles.section_5}>₹{details?.price}</div>
                <div className={styles.section_6}>Book</div>
            </div>
        </Card>
    )
}

export default FlightCard