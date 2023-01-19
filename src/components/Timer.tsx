import { BlockList } from "net";
import React from "react";

import timeZones from "../time-zones";
type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    // console.log('tz', timeZones[1]);
    // console.log('J.s',JSON.stringify(timeZones[1]));

    const timeZoneIndex: number = timeZones.findIndex(tz => {
        return JSON.stringify(tz).includes(props.cityOrCountry)})
    const timeZone:string = timeZones[timeZoneIndex]?.name;
    const timeZoneName: string = timeZone ? props.cityOrCountry : "Israel"
    console.log(props.cityOrCountry);
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    return <div>
        <h3>Time in time zone {timeZoneName}</h3>
        <label style={{display: "block",
         textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}