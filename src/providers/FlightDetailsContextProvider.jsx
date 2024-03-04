import React, { useContext, useEffect, useState } from 'react'

const FlightDetailsContext = React.createContext()
const FlightDetailsContextProvider = ({ children }) => {
  const [flights, setFilghts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [airlines, setAirlines] = useState([]);

  const fetchFlights = async () => {
    try {
      let response = await fetch('https://api.npoint.io/378e02e8e732bb1ac55b');
      response = await response.json();
      if (Array.isArray(response)) {
        setFilghts(response);
      }
      else {
        setFilghts([]);
      }
    }
    catch (err) {

    }
  }

  useEffect(() => {
    fetchFlights();
  }, [])

  useEffect(() => {
    let arr = [], arr1 = [];
    flights.forEach((flight, index) => {
      if (!arr.find(item => item?.label?.toLowerCase() === flight?.destination?.toLowerCase()))
        arr.push({ id: index, label: flight?.destination });
      if (!arr1.find(item => item?.label?.toLowerCase() === flight?.airline?.toLowerCase()))
        arr1.push({ id: index, label: flight?.airline })
    })
    setLocations(arr);
    setAirlines(arr1);
  }, [flights])
  return (
    <FlightDetailsContext.Provider value={{ flights, locations, airlines }}>
      {children}
    </FlightDetailsContext.Provider>
  )
}

export const useFlightDetailsContext = () => {
  const { flights, locations, airlines } = useContext(FlightDetailsContext)
  return { flights, locations, airlines }
}

export default FlightDetailsContextProvider