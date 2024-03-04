import React, { useState } from 'react'
import styles from "./InputCard.module.scss"
import Card from '../card'
import DatePicker from '../datePicker'
import AutocompleteSearch from '../autocompleteSearch'
import { useFlightDetailsContext } from '../../providers/FlightDetailsContextProvider'
import reverse from "../../assets/images/reverse.png";
const InputCard = ({ setResults }) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("")
    const [returnDate, setReturnDate] = useState("");
    const { flights, locations } = useFlightDetailsContext();
    const disableSubmit = () => {
        if (origin && destination && departureDate?.day && departureDate?.month && departureDate?.year) {
            return false
        }
        return true;
    }
    const extractDateInfo = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate(); // 1-31
        const month = date.getMonth() + 1; // 0-11 (January is 0, so we add 1)
        const year = date.getFullYear(); // Full year, e.g., 2024
        console.log({ day, month, year })
        return { day, month, year };
    }
    console.log(departureDate)
    const searchHandler = () => {
        if (!disableSubmit() && Array?.isArray(flights)) {
            if (!returnDate?.day)
                setResults(prev => { return { return: [], departure: flights?.filter(flight => extractDateInfo(flight?.departureTime)?.day === departureDate?.day && extractDateInfo(flight?.departureTime)?.month === departureDate?.month && extractDateInfo(flight?.departureTime)?.year === departureDate?.year && flight?.origin.toLowerCase() === origin.toLowerCase() && flight?.destination?.toLowerCase() === destination?.toLowerCase()) } })
            if (returnDate?.day && departureDate?.day) {
                setResults(prev => {
                    return {
                        return: flights?.filter(flight => extractDateInfo(flight?.departureTime)?.day === returnDate?.day && extractDateInfo(flight?.departureTime)?.month === returnDate?.month && extractDateInfo(flight?.departureTime)?.year === returnDate?.year && flight?.origin.toLowerCase() === destination.toLowerCase() && flight?.destination?.toLowerCase() === origin?.toLowerCase()),
                        departure: flights?.filter(flight => extractDateInfo(flight?.departureTime)?.day === departureDate?.day && extractDateInfo(flight?.departureTime)?.month === departureDate?.month && extractDateInfo(flight?.departureTime)?.year === departureDate?.year && flight?.origin.toLowerCase() === origin.toLowerCase() && flight?.destination?.toLowerCase() === destination?.toLowerCase())
                    }
                })
            }
        };
    }
    const reverseLocations = () => {
        let temp = origin;
        setOrigin(destination);
        setDestination(temp);
    }
    return (
        <Card style={{ padding: "40px", margin: "40px" }}>
            <div className={styles.container}>
                <div className={styles.location_container}>
                    <AutocompleteSearch options={locations} label="Origin" value={origin} onSubmit={(value) => setOrigin(value)} />
                    <div className={styles.reverse_container} onClick={reverseLocations}>
                        <img src={reverse} alt="reverse" />
                    </div>
                    <AutocompleteSearch options={locations} label="Destination" value={destination} onSubmit={(value) => setDestination(value)} />
                </div>
                <DatePicker setDepartureDate={setDepartureDate} setReturnDate={setReturnDate} />
                <div className={styles.search_cta} style={{ cursor: disableSubmit() ? "not-allowed" : "pointer" }} onClick={searchHandler}>Search</div>
            </div>
        </Card>
    )
}

export default InputCard