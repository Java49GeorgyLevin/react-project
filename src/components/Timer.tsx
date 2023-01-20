import { BlockList } from "net";
import React, { useState } from "react";
import timeZones from "../time-zones";
import { Input } from "./Input";
type TimerProps = {
    cityOrCountry: string;
    inputId: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    let [timeZone, setTimeZone] = React.useState(timeZones[timeZoneIndex(props.cityOrCountry)]?.name);
    let [timeZoneName, setTimeZoneName] = React.useState(timeZone ? props.cityOrCountry : "Israel");
    console.log(props.cityOrCountry);
    const [time, setTime] = React.useState(new Date());

    function timeZoneIndex(cityOrCountry: string): number { 
        return timeZones.findIndex(tz => JSON.stringify(tz).includes("\"" + cityOrCountry + "\""));
    }

    function timeZoneProcess(cityOrCountry: string): string {
        let res: string = '';
        const indexZone: number = timeZoneIndex(cityOrCountry);
        if(indexZone < 0) {
            res = "Name city or country " + cityOrCountry + " is wrong";
        } else {
            setTimeZone(timeZones[indexZone].name);
            setTimeZoneName(cityOrCountry);
        }
        return res;
    }

    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
        
    const pH: string = 'enter country/city';
    return <div>
        <h3>Time in {timeZoneName}</h3>
        <h4>(Time zone: {timeZone})</h4>
        <label style={{display: "block",
        textAlign: "center", fontSize: "2em"}}>Time {time.toLocaleTimeString(undefined,{timeZone})}</label>
        <Input inputId={props.inputId} inputProcess={timeZoneProcess} placeHolder={pH}/>
    </div>
}