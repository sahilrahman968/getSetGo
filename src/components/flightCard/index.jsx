import React from 'react'
import styles from "./FlightCard.module.scss"
import Card from '../card'
import airline from "../../assets/images/flight.png"
import { convertTo24HourFormat } from '../../helper'

const FlightCard = ({ details }) => {
    return (
        <Card style={{ padding: "20px", margin: "10px" }}>
            <div className={styles.container}>
                <div className={styles.section_1}>
                    <div className={styles.airline_image}>
                        <img src={airline} alt="airline-image" />
                    </div>
                    <div className={styles.airline_details}>
                        <div className={styles.airline_name}>{details?.airline}</div>
                        <div className={styles.flight_no}>{details?.flightNumber}</div>
                    </div>
                </div>
                <div className={styles.section_2}>
                    <span className={styles.time}>{convertTo24HourFormat(details?.departureTime)}</span>
                    <span className={styles.text}>{details?.origin}</span>
                </div>
                <div className={styles.section_3}>
                    <span className={styles.duration_value}>{details?.duration}</span>
                    <span className={styles.duration}>Duration</span>
                </div>
                <div className={styles.section_4}>
                    <span className={styles.time}>{convertTo24HourFormat(details?.arrivalTime)}</span>
                    <span className={styles.text}>{details?.destination}</span>
                </div>
                <div className={styles.section_7}>
                    <div className={styles.section_5}>₹{details?.price}</div>
                    <div className={styles.section_6}>Book</div>
                </div>
            </div>
        </Card>
    )
}

export default FlightCard