import React, { useEffect } from "react"
import { Alert } from "./Alert";
type InputProps = {
    inputId: string;
    inputProcess: (value: string)=>string;
    placeHolder: string 
}
export const Input: React.FC<InputProps> = ({inputId, inputProcess, placeHolder}) => {
    let inputElement: HTMLInputElement | null
    const [message, setMessage] = React.useState('')
    function processGo(): void {
       setMessage('')
        const messageRet: string = inputProcess(inputElement!.value);
        if (messageRet == '') {
            inputElement!.value = '';
        } else {
            
            setMessage(messageRet);
        }
    }
    useEffect(() => {
       inputElement = document.getElementById(inputId) as HTMLInputElement;
    })
    return <div>
        <input id={inputId} placeholder={placeHolder}/>
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} message={message}/>}
    </div>
}