import React from 'react';
import { Input } from './components/Input';
import { Timer } from './components/Timer';

function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = { display: "flex", flexDirection: "row" , 
  justifyContent: "space-around", width: "50vw", marginTop: "4vh"}
  
  const [citiesAndCountries, setCitiesAndCountries] = React.useState<string[]>([])
  function creatingArCAC(value: string): string {
      const citiesAndCountries: string[] = value.split("#");
      let res: string = "";
      if(citiesAndCountries.length < 2 && citiesAndCountries.length % 2 != 0) {
        res = "Amount non even";
      } else {
      setCitiesAndCountries(citiesAndCountries);
      }
  return res;
  }

  function getWatches(citiesAndCountries: string[]): JSX.Element[] {
    let res: JSX.Element[] = []; 
    for(let i: number = 0; i < citiesAndCountries.length; i = i + 2) {
      res.push(<div style={flexRow}>
      <Timer cityOrCountry={citiesAndCountries[i]}></Timer>
      <Timer cityOrCountry={citiesAndCountries[i+1]}></Timer>
    </div>)
    }
    return res;
  }
 
  return <div style={flexColumn}>
    <Input placeHolder={'Enter even amount Cities or Countries separated by #'} inputProcess={creatingArCAC}></Input>
    <section>
      {getWatches(citiesAndCountries)}
    </section>
  </div>

}

export default App;