import './App.css';
import FlightDetailsContextProvider from './providers/FlightDetailsContextProvider';
import InputCard from './components/inputCard';
import FlightCard from './components/flightCard';
import Home from './components/home';

function App() {
  return (
    <div className='App'>
    <FlightDetailsContextProvider>
      <Home/>
    </FlightDetailsContextProvider>
    </div>
  );
}

export default App;
