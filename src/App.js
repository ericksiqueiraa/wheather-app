import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import TemperatureDetails from './components/TemperatureDetails';



import './App.css';

import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeLocation />
      <TemperatureDetails />

    </div>
  );
}

export default App;
