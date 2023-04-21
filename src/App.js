
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import DigiCard from './components/DigiCard';

function App() {

const [digimon,setDigimon] = useState([])

useEffect(() => {
  axios
  .get('https://digimon-api.vercel.app/api/digimon')
  .then((res) => {
    console.log(res.data)

    setDigimon(res.data)

    
   

    })
   
  
    
  },[])

const digi = digimon.map((d,index) => {
 return d.name
})



  return (
    <div className="App">
     <header>Digimon</header>

    <DigiCard digimon={digimon}/>
    </div>
  );
}

export default App;
