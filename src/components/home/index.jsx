import React, { useEffect, useState } from 'react'
import InputCard from '../inputCard'
import FlightCard from '../flightCard'
import { useFlightDetailsContext } from '../../providers/FlightDetailsContextProvider'
import styles from "./Home.module.scss"
import Dropdown from '../dropdown'
import { sortByCheapestFirst, sortByFastestFirst } from '../../helper'
import Header from '../header'

const Home = () => {
    const { flights, locations, airlines } = useFlightDetailsContext();
    const [results, setResults] = useState({ departure: [], return: [] });
    const [updatedResults,setUpdatedResults] = useState({ departure: [], return: [] });
    const [selectedAirline , setSelectedAirline ] = useState("");
    const [sortBy, setSortBy] = useState(null);
    useEffect(()=>{
        if(selectedAirline){
            setUpdatedResults(prev=>{
                return {
                    departure: results?.departure?.filter(result => result?.airline?.toLowerCase() === selectedAirline?.toLocaleLowerCase()),
                    return: results?.return?.filter(result => result?.airline?.toLowerCase() === selectedAirline?.toLocaleLowerCase())
                }
            })
        }
        else{
            setUpdatedResults(results);
        }
        if(sortBy === "Cheapest First"){
            setUpdatedResults({departure:sortByCheapestFirst(updatedResults?.departure), return:sortByCheapestFirst(updatedResults?.return)})
        }
        else if(sortBy === "Fastest First"){
            setUpdatedResults({departure:sortByFastestFirst(updatedResults?.departure), return:sortByFastestFirst(updatedResults?.return)})
        }
    },[selectedAirline,results,sortBy])
    return (
        <>
            <Header/>
            <InputCard setResults={setResults} />
            <div className={styles.filter_container}>
                <div className={styles.dropdown_container}>
                    <Dropdown label="Airlines" options={airlines} onSubmit={(value)=>setSelectedAirline(value)}/>
                </div>
                <div className={styles.dropdown_container}>
                    <Dropdown label="Sort by" options={[{id:1,label:"Cheapest First"},{id:2,label:"Fastest First"}]} onSubmit={(value)=>setSortBy(value)}/>
                </div>
            </div>
            <div className={styles.results_container}>
                <div>
                    {
                        updatedResults?.departure?.map((detail, index) => {
                            return <FlightCard details={detail} />
                        })
                    }
                </div>
                <div>
                    {
                        updatedResults?.return?.map((detail, index) => {
                            return <FlightCard details={detail} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home